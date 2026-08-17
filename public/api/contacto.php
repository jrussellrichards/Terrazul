<?php
/**
 * Terrazul — recepción del formulario de contacto.
 *
 * Reemplaza a php/form-process.php del sitio anterior.
 * Cambios respecto de la versión antigua:
 *   - Valida y normaliza en el servidor, no solo en el navegador.
 *   - Evita inyección de cabeceras (el sitio anterior pasaba el email del
 *     visitante directo a la cabecera From, sin filtrar saltos de línea).
 *   - Descarta bots mediante honeypot.
 *   - Responde JSON al envío por fetch y redirige si el visitante no tiene JS.
 *
 * Requiere que el hosting tenga habilitada la función mail() de PHP.
 * Si el correo no llega, revisar con el proveedor el registro SPF del dominio.
 */

declare(strict_types=1);

/* --- Configuración -------------------------------------------------------- */

const DESTINATARIO   = 'mlagos@terrazulspa.cl';
const REMITENTE      = 'web@terrazulspa.cl';   // debe ser una casilla del propio dominio
const ASUNTO_PREFIJO = '[Web Terrazul] ';
const PAGINA_GRACIAS = '/gracias';
const PAGINA_ERROR   = '/contacto?error=1';

/* --- Utilidades ----------------------------------------------------------- */

function quiereJson(): bool
{
    $accept = $_SERVER['HTTP_ACCEPT'] ?? '';
    return str_contains($accept, 'application/json');
}

function responder(bool $ok, string $mensaje, int $codigo = 200): never
{
    http_response_code($codigo);

    if (quiereJson()) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(
            $ok ? ['ok' => true] : ['ok' => false, 'error' => $mensaje],
            JSON_UNESCAPED_UNICODE
        );
    } else {
        header('Location: ' . ($ok ? PAGINA_GRACIAS : PAGINA_ERROR), true, 303);
    }
    exit;
}

/** Limpia un valor que va a terminar dentro de una cabecera de correo. */
function limpiarCabecera(string $valor): string
{
    return trim(str_replace(["\r", "\n", "%0a", "%0d"], '', $valor));
}

function campo(string $nombre, int $maximo = 2000): string
{
    $valor = $_POST[$nombre] ?? '';
    if (!is_string($valor)) {
        return '';
    }
    return mb_substr(trim($valor), 0, $maximo);
}

/* --- Guardas -------------------------------------------------------------- */

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    responder(false, 'Método no permitido.', 405);
}

// Honeypot: si viene relleno, es un bot. Respondemos ok para no darle señal.
if (campo('sitio_web') !== '') {
    responder(true, '');
}

/* --- Validación ----------------------------------------------------------- */

$nombre   = limpiarCabecera(campo('nombre', 120));
$email    = limpiarCabecera(campo('email', 160));
$empresa  = limpiarCabecera(campo('empresa', 120));
$telefono = limpiarCabecera(campo('telefono', 40));
$servicio = limpiarCabecera(campo('servicio', 120));
$mensaje  = campo('mensaje', 5000);

$errores = [];

if (mb_strlen($nombre) < 2) {
    $errores[] = 'Indica tu nombre.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errores[] = 'Revisa el correo ingresado.';
}
if (mb_strlen($mensaje) < 10) {
    $errores[] = 'Cuéntanos un poco más sobre lo que necesitas.';
}

if ($errores) {
    responder(false, implode(' ', $errores), 422);
}

/* --- Composición del correo ----------------------------------------------- */

$asunto = ASUNTO_PREFIJO . ($servicio !== '' ? $servicio : 'Nueva solicitud');

$cuerpo = implode("\n", [
    'Nueva solicitud desde terrazulspa.cl',
    str_repeat('-', 46),
    'Nombre:   ' . $nombre,
    'Empresa:  ' . ($empresa !== '' ? $empresa : '—'),
    'Correo:   ' . $email,
    'Teléfono: ' . ($telefono !== '' ? $telefono : '—'),
    'Servicio: ' . ($servicio !== '' ? $servicio : '—'),
    str_repeat('-', 46),
    '',
    $mensaje,
    '',
    str_repeat('-', 46),
    'Fecha: ' . date('d-m-Y H:i'),
    'IP:    ' . ($_SERVER['REMOTE_ADDR'] ?? 'desconocida'),
]);

$cabeceras = [
    'From: Web Terrazul <' . REMITENTE . '>',
    'Reply-To: ' . $nombre . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$enviado = mail(
    DESTINATARIO,
    '=?UTF-8?B?' . base64_encode($asunto) . '?=',
    $cuerpo,
    implode("\r\n", $cabeceras),
    '-f' . REMITENTE
);

if (!$enviado) {
    responder(false, 'No pudimos enviar el mensaje en este momento.', 500);
}

responder(true, '');
