# Bitácora de mensajes — Terrazul

Por qué el sitio dice lo que dice, y qué falta por confirmar.

El [manual de marca](MANUAL-DE-MARCA.md) fija las **reglas** (tono, vocabulario, qué no
se publica). Este documento registra las **decisiones concretas**: qué texto se eligió,
contra qué alternativas, con qué evidencia, y qué haría falta para cambiarlo.

Sirve para tres cosas:

1. Que dentro de un año se sepa por qué el titular dice eso y no otra cosa.
2. Que nadie deshaga una decisión sin conocer el argumento que la sostenía.
3. Que las afirmaciones sin confirmar no se pierdan de vista.

> **Cómo mantenerlo.** Cada vez que se cambie un texto visible, se agrega una entrada
> abajo. No se editan las entradas viejas: se agrega una nueva que reemplaza a la
> anterior y se marca la vieja como *superada*. La gracia está en el historial.

---

# Parte 1 — Pendientes por confirmar

Afirmaciones publicadas o propuestas que **no están respaldadas**, y datos que faltan.
Ordenadas por riesgo.

| # | Qué | Estado | Riesgo si no se resuelve |
| --- | --- | --- | --- |
| P1 | **"En terreno el mismo día"** en el antetítulo del hero | 🔴 Publicado sin confirmar | Es una promesa operativa. Alguien llama un martes esperando visita ese día |
| P2 | **"Visita técnica sin costo"** en el chip del hero | 🟡 Publicado, perdió una condición | En `/contacto` decía *"dentro del Gran Concepción"*. El chip lo dice sin límite geográfico |
| P3 | **Cifras de respaldo**: años, proyectos, m² ejecutados | 🔴 No existen en el sitio | Es la brecha más grande frente a la competencia (ver D5) |
| P4 | **Marcas representadas** para una fila de logos | 🟡 Falta el dato | Se pierde la vía más rápida y verificable de ganar credibilidad |
| P5 | **¿Existe una garantía contractual?** | 🟡 Falta el dato | Un competidor directo lidera con garantía de 3 años (ver D8) |
| P6 | **Cliente que autorice ser nombrado**, o testimonio con nombre y cargo | 🟡 Falta el dato | Cero prueba social en todo el sitio |
| P7 | **Fotos de faena propia** — hay [pauta lista](PAUTA-DE-FOTOS.md) | 🟡 Parcial | Bloquea el antes/después (+20–35 % de conversión) y el bento de proceso (D14) |
| P8 | **Segunda tanda de textos de Marcelo** | ⏳ Anunciada, no recibida | Cambios de vocabulario al registro técnico. Se aplican en bloque cuando lleguen |
| P9 | **Casilla `web@terrazulspa.cl`** como remitente del endpoint PHP | 🟡 Sin verificar | Solo afecta si se vuelve a un hosting Apache. En Vercel no corre |

**P1 y P2 son los únicos que hoy están publicados afirmando algo no verificado.** Los demás
son ausencias, no afirmaciones falsas — y una ausencia se corrige cuando llega el dato.

---

# Parte 2 — Decisiones de mensaje

---

## D1 · Titular del hero

**Hoy:**
> Protegemos las instalaciones que sostienen tu operación.

**Historial:**

| Versión | Texto |
| --- | --- |
| Sitio original | Carrusel rotando: *"TERRAZUL SpA"* → *"Expertos en el área"* → *"Enfocados en el cliente"* |
| Reconstrucción v1 | *"Protegemos lo que sostiene tu operación."* |
| **Actual** (Marcelo, 16-08-2026) | *"Protegemos las instalaciones que sostienen tu operación."* |

**Por qué.** El titular original usaba el nombre de la empresa como titular: decía **quién
eres**, no **qué problema resuelves**. El visitante que llega con una filtración no busca
una presentación corporativa.

La investigación del rubro muestra **dos familias de titular**:

| Familia | Ejemplos | Requisito |
| --- | --- | --- |
| **Legado / autoridad** | *"Crafting Legacies for Over a Century"* (RAM) · *"America's Master Craftsmen"* (Western) · *"Más de 40 Años Liderando"* (FPM) | Antigüedad demostrable |
| **Resultado / beneficio** | *"Hardworking Floors for Hardworking Businesses"* (Stonhard) · *"Done Right"* (Restocon) · *"Hechos para Durar"* (ASANCHEZ) | Ninguno |

Terrazul **no puede jugar la primera** mientras no tenga cifras confirmadas (P3). La segunda
funciona sin importar la antigüedad, y es donde está el titular actual.

La corrección de Marcelo (*lo que* → *las instalaciones*) gana concreción: nombra el objeto
protegido. Cuesta una línea más larga y lo vale.

**Qué lo cambiaría.** Si llegan las cifras de P3, se podría evaluar un titular de la primera
familia. No es obligatorio: Stonhard tiene décadas y sigue eligiendo la segunda.

---

## D2 · Bajada del hero — por qué es corta

**Hoy** (14 palabras):
> Impermeabilización, pisos industriales y refuerzo estructural para plantas y edificios del sur de Chile.

**Historial:**

| Versión | Palabras |
| --- | --- |
| Reconstrucción v1 | 40 |
| Ampliación de Marcelo (16-08-2026) | 40 |
| Propuesta intermedia — **descartada** | 34 |
| **Actual** | **14** |

**Por qué.** Referencias medidas:

| | Palabras |
| --- | --- |
| Western Specialty | 10 |
| Stonhard | 14 |
| ASANCHEZ | 21 |
| FPM | 23 |

La versión de 40 palabras intentaba hacer **tres trabajos a la vez**: enumerar servicios,
declarar la contraparte única y prometer que no se detiene la planta. Una bajada hace uno.
Los otros dos argumentos no se eliminaron: subieron a chips (D3).

**Efecto colateral aceptado.** Se cayeron del listado *"control de filtraciones"*,
*"remodelaciones y ampliaciones"* y los destinatarios *"comerciales y habitacionales"*, que
Marcelo había agregado. Siguen presentes en la franja de rubros y en `/servicios`.
**Conviene que él lo sepa.**

---

## D3 · Chips del hero

**Hoy:** `Una sola contraparte` · `Sin detener tu planta` · `Visita técnica sin costo`

**Por qué chips y no una frase.** Un chip se escanea; una subordinada al final del tercer
renglón no se lee. Cada argumento recibe su propio espacio visual.

**Por qué estos tres:**

- **Una sola contraparte** — Stonhard construye toda su identidad global sobre exactamente
  esto: *"single-source, turnkey model… you work with one point of contact from start to
  finish"*. Terrazul lo tenía, pero enterrado en la palabra 38.
- **Sin detener tu planta** — para un jefe de mantención, una detención no programada cuesta
  más que la obra completa. EP Floors lo pone al frente. El consenso del rubro es explícito:
  *"Downtime is rarely minimized by product selection alone. It is minimized by execution."*
- **Visita técnica sin costo** — los **tres** competidores chilenos usan el gancho de
  gratuidad (*"cotización gratuita"*, *"visita sin costo"*). Terrazul lo tenía escondido en
  `/contacto`.

**Detalles de implementación.** En móvil se apilan uno por fila: forzar dos por fila dejaba
un chip huérfano y quedaban 7 px cortos. Apilados leen como checklist.

⚠️ Ver **P2**: el chip perdió la condición *"dentro del Gran Concepción"*.

---

## D4 · CTA — "visita técnica", no "cotización"

**Hoy:** `Solicitar visita técnica` (primario) · `Ver servicios` (secundario)

**Por qué.** La convención chilena del rubro es *"Solicitar cotización"* — lo usan FPM,
ASANCHEZ y Proedificio. Terrazul se aparta a propósito: *visita técnica* refuerza el
posicionamiento *"diagnóstico antes que producto"* (D6) y describe lo que realmente ocurre.

**Riesgo asumido.** *Cotización* es lo que el comprador busca; *visita técnica* pide dejar
entrar a alguien a la planta, que es un compromiso mayor. **Puede convertir menos.** Si
hubiera analítica y el CTA rinde poco, esta es la primera hipótesis a probar.

---

## D5 · Por qué el sitio no publica ni una cifra

**Hoy:** cero números en todo el sitio.

**Por qué.** La regla del manual (§2.4) es que ningún número se publica sin confirmación de
la empresa. Al reconstruir el sitio no había ninguno confirmado, así que no se publicó
ninguno.

**Lo que cuesta.** Los 9 sitios investigados tienen prueba numérica visible arriba:

| | Prueba en el hero |
| --- | --- |
| FPM (competencia directa) | 44+ años · 500+ proyectos · ISO 9000 · NCh.2909 |
| ASANCHEZ | +500 proyectos · +10 años |
| RAM | 200.000+ proyectos · 100 años |
| Restocon | Desde 1997 · ACI/ICRI/PTI |

Un jefe de mantención abre las dos pestañas y compara en tres segundos. La decisión es
correcta —es preferible no tener cifras a inventarlas— pero **es la mayor desventaja
competitiva del sitio** y se resuelve con P3 o P4.

**Advertencia.** ASANCHEZ exhibe *"100% Clientes Satisfechos"*. Eso es relleno no
verificable y va contra el manual. **No copiarlo aunque la competencia lo haga.**

---

## D6 · Diferenciales — por qué se reemplazaron los originales

| Antes | Hoy |
| --- | --- |
| Creemos en la calidad | Diagnóstico antes que producto |
| Trabajo rápido | Una sola contraparte |
| Confía en nosotros | Trabajamos con la planta operando |
| — | Conocimiento del sur |

**Por qué.** Los tres originales son **no falsables**: ninguna empresa del rubro afirmaría
lo contrario, así que no distinguen nada. Los actuales sí describen una forma de operar que
un competidor podría no cumplir — y por lo tanto son informativos.

---

## D7 · Registro del vocabulario

Marcelo corrigió cuatro textos el 16-08-2026 y el criterio quedó claro:

| Coloquial | Técnico formal |
| --- | --- |
| aguantan | **soportan** |
| entra el agua | **ingresa** el agua |
| lavado diario | lavado **permanente** |
| donde entra | donde **se produce** |
| control de agua**s** | control de **agua** (singular) |

**Regla derivada:** ante la duda, el registro técnico formal.

**Pendiente (P8).** Quedan expresiones coloquiales sin alinear: *"un piso que se levanta al
año"*, *"no da el ancho"*, *"pelota dividida"*, *"de acá"*. **No se tocaron a propósito**,
para no chocar con la segunda tanda que él está redactando. Se aplican todas juntas.

---

## D8 · Por qué no se usa la palabra "garantía"

**Hoy:** el sitio habla de *respaldo* — protocolo de recepción, fichas técnicas, registro de
lo aplicado, recomendaciones de mantención. Nunca de garantía ni de plazos de garantía.

**Por qué.** Es un compromiso contractual. Publicarlo sin respaldo expone a la empresa.

**Lo que cuesta.** IDRO, competidor directo, **lidera con garantía de 3 años**. Es un
argumento de reducción de riesgo muy potente en un rubro donde el comprador ya se quemó una
vez.

**Qué lo cambiaría.** P5. Si Terrazul entrega una garantía por contrato, va en el hero.

---

## D9 · Sección de rubros

**Hoy:** antetítulo *"Dónde prestamos servicios"* · título *"Cada rubro industrial requiere
soluciones distintas."* (ambos de Marcelo, 16-08-2026)

**Antes:** *"Dónde trabajamos"* / *"Cada rubro ataca la superficie de una forma distinta."*

**Por qué se mantiene la sección donde está.** Sika y EP Floors segmentan por vertical
industrial en la parte alta de la home: permite que el visitante se autoidentifique. La
franja de rubros bajo el hero cumple esa función y **no debe eliminarse** al reordenar.

---

## D15 · Se eliminaron las cuatro tarjetas de diferenciales

**Antes:** la sección *"Por qué nos llaman"* cerraba con cuatro tarjetas idénticas —mismo
icono de check— con estos argumentos:

| Título | Texto |
| --- | --- |
| Diagnóstico antes que producto | *Un buen material mal especificado falla igual. Primero entendemos por qué se filtra, por qué se levanta el piso o por qué fisura la estructura.* |
| Una sola contraparte | *Especificación, suministro e instalación bajo un mismo responsable. No hay pelota dividida entre el que vende y el que aplica.* |
| Trabajamos con la planta operando | *Programamos las faenas por sectores, en turnos y ventanas de parada, para que la intervención no se transforme en una detención.* |
| Conocimiento del sur | *Equipo con experiencia en el sector industrial y construcción de la zona sur: sabemos cómo se comporta un sistema con esta humedad y este clima.* |

**Por qué se eliminaron.** Las cuatro **repetían contenido que ya existía en otra parte de la
misma página**. Se habían escrito antes que el hero con chips, la tabla comparativa y la
sección de proceso, y quedaron redundantes:

| Tarjeta | Dónde ya se decía |
| --- | --- |
| Diagnóstico antes que producto | Título de *"Cómo trabajamos"* + primera fila de la tabla |
| Una sola contraparte | Chip del hero + **la tabla completa** |
| Trabajamos con la planta operando | Chip del hero *"Sin detener tu planta"* |
| Conocimiento del sur | Antetítulo del hero + sección *"Nosotros"* |

**Texto conservado arriba** por si alguno hace falta en otra página; el argumento sigue
siendo válido, lo que sobraba era decirlo dos veces.

---

## D16 · La agitación pasó de prosa a piezas

**Hoy:** tres piezas en `oxido-50`, con icono propio cada una — *Producto rechazado* ·
*Parada no programada* · *Corrosión silenciosa* — seguidas de una sola línea de remate a
tamaño `text-declaracion`.

**Antes:** el mismo contenido en un párrafo de prosa de 40 palabras.

**Por qué.** La sección completa tenía ~250 palabras, 1657 px de alto y ocho bloques
apilados: se leía como un muro. El diagnóstico del cliente fue *"demasiado texto, estática,
fome"*, y era correcto.

Resultado tras el rediseño: **154 palabras (−38 %) y 1260 px (−24 %)**, con cuatro bloques en
vez de ocho.

**El color hace de narrador.** El costo va en óxido; la solución —la tabla— en azul. El
recorrido visual de la sección es *problema → prueba* sin necesidad de conectores escritos.
Es el único lugar del sitio donde el óxido ocupa una superficie apreciable, y se justifica
porque es literalmente el color del daño.

**Regla derivada.** Si esta sección vuelve a pasar de ~160 palabras, algo se está diciendo
dos veces. Antes de agregar, revisar si ya se dice en el hero o en la tabla.

---

## D12 · Tabla comparativa "quién cubre qué"

**Hoy:** al cierre de *"Por qué nos llaman"*, una tabla de tres columnas —Distribuidor ·
Contratista · Terrazul— sobre cinco criterios, con la columna de Terrazul destacada.

**Por qué.** *"Una sola contraparte"* era una **afirmación**. En la tabla pasa a ser algo que
el visitante **verifica con los ojos**. La última fila —*"Responde si el sistema falla"*— es
todo el argumento comercial en una línea.

**Evidencia.** Ramp dedica una sección completa a *"Ramp vs. Competitors"* porque su
posicionamiento es de consolidación: reemplazar varios proveedores por uno. El de Terrazul es
exactamente el mismo. La recomendación del rubro es explícita: una comparativa creíble
**reconoce las fortalezas del competidor**; por eso distribuidor y contratista conservan sus
marcas donde corresponde, y por eso la nota al pie dice que las otras opciones no están mal.

**Qué la haría cambiar.** Si Terrazul deja de cubrir alguna de las cinco filas, la tabla se
corrige de inmediato. Es la clase de afirmación que envejece mal si el servicio cambia.

---

## D13 · Jerarquía de la agitación

**Hoy:** la frase *"Es producto rechazado, es una parada no programada, es una estructura que
se corroe en silencio durante tres inviernos"* ocupa el ancho completo a 26 px (token
`text-declaracion`), en `azul-900`.

**Antes:** el mismo texto, a 17 px, en una columna estrecha de 5/12, compitiendo con cuatro
tarjetas a su derecha.

**Por qué.** Era el mejor texto de la web y estaba susurrado. El criterio del rubro es
directo: *"si la sección de agitación no incomoda al lector, no está haciendo su trabajo. Los
lectores cómodos no compran."*

**Regla derivada.** El token `text-declaracion` queda **reservado a la frase que nombra el
problema del cliente**. Si se usa para cualquier párrafo, deja de significar algo.

---

## D18 · Las figuras animan en bucle

**Hoy:** las cuatro figuras del bento animan de forma continua. 47 animaciones infinitas.

**Antes:** cada figura animaba una vez al entrar en pantalla y quedaba fija.

**Por qué cambió.** Observación del cliente, y es correcta: *"uno llega a la sección y la
animación dura un segundo solamente"*. Una animación de un disparo tiene dos fallas —deja la
sección estática a los dos segundos, y **no la ve quien llega tarde**, que es la mayoría
cuando el scroll es rápido.

Estas figuras no son adorno: **son la explicación**. Si la explicación se detiene, la pieza
vuelve a ser un dibujo mudo.

**Qué cuenta cada bucle:**

| Figura | Movimiento | Qué dice |
| --- | --- | --- |
| Recorrido | El guion fluye por el trazo, sin fin | El agua sigue entrando |
| Parada | Onda que viaja por los bloques; el tramo detenido **no se mueve** | La línea produce, salvo ahí |
| Inviernos | La grieta crece, se sostiene y reinicia | El daño avanza solo |
| Contraparte | La barra se barre completa y se repite | La cobertura no tiene huecos |

En la pieza de parada el contraste **es** el mensaje: si todo se moviera, no se notaría el
tramo muerto.

**Lo que se conservó de la regla anterior.** La objeción original a los bucles —consumo de
CPU y batería— sigue siendo válida, así que las animaciones **se pausan fuera de pantalla**
mediante un observador que, a diferencia del de `.revelar`, no deja de observar.

**Un detalle de robustez.** La lógica de pausa va invertida: por defecto corren y solo el
observador las detiene (`.fuera-de-vista`). Si se hubiera hecho al revés —pausadas hasta que
el observador las active— un fallo del JavaScript dejaría las figuras congeladas, que es
exactamente el problema que este cambio venía a resolver. El peor caso ahora es animar de
más, nunca quedar quieto.

**Cierre sin salto.** Cada bucle desplaza por ciclo exactamente un periodo de su patrón
(el guion `9 8` avanza `-17`), de modo que el reinicio es invisible.

---

## D17 · Bento aplicado a "Por qué nos llaman"

> **Supera a [D14](#d14--por-qué-no-se-copió-el-bento-de-vambe)**, que había descartado este
> patrón. La objeción de D14 estaba mal planteada y el cliente insistió con razón.

**Por qué la objeción era errónea.** D14 asumía que las piezas necesitaban fotos. Al desarmar
el HTML de Vambe quedó claro que **sus visuales tampoco son fotos**: son componentes dibujados
en el navegador. Lo que hacía falta no era material fotográfico, sino diagramas del *problema
del cliente* —no diagramas genéricos de sistemas, que sí habrían sido intercambiables con los
de cualquier competidor.

**Los recursos visuales que se replicaron**, extraídos del marcado real:

| Recurso | Cómo lo hace Vambe |
| --- | --- |
| Contenedor | `rounded-2xl` + `overflow-hidden` + `relative`, fondo sólido, `gap-3` |
| Cabecera | `absolute top-0 z-10 p-3` — **flota sobre el gráfico**, no encima de él |
| Título | `font-bold leading-snug` |
| Categoría | `text-[10px]` al **60 % de opacidad** |
| Gráfico | `absolute -bottom-3 inset-x-0 h-[78%]` — anclado abajo, **sangra fuera del borde** y lo recorta el radio |
| Cabecera de sección | Centrada y **a dos tonos**: segunda línea en el color de marca |

**El detalle que lo cambia todo** es el último: el gráfico no va contenido con márgenes dentro
de la tarjeta, va a sangre y recortado. Esa sola diferencia es la que separa "un diagrama
dentro de una caja" de "una escena asomada". La primera versión de esta sección fallaba justo
ahí.

**Adaptación necesaria.** Las figuras usan `preserveAspectRatio="xMidYMax slice"` para
comportarse como `object-cover`, salvo la pieza ancha de contraparte, que usa `meet`: su
argumento son dos filas comparadas y el recorte se comía la de arriba —error detectado
rasterizando las piezas antes de publicar.

**Piezas y rotación de color:** `azul-950` → `azul-500` → `azul-100` → `azul-900`.

---

## D14 · Por qué NO se copió el bento de Vambe

> ⚠️ **Superada por [D17](#d17--bento-aplicado-a-por-qué-nos-llaman).** Se conserva porque el
> razonamiento equivocado también sirve: la objeción daba por hecho que el patrón exigía
> fotografías, y no las exige.

**Decisión:** se evaluó replicar el patrón de bento grid de
[vambe.ai](https://www.vambe.ai/) —nueve piezas con color rotando, par de etiquetas
acción/categoría y un visual por pieza— para la sección *"Cómo trabajamos"*. **Se descartó
por ahora.**

**Por qué el patrón es bueno.** Al desarmarlo: 3 columnas de piezas de 205 px, radio 16,
fondo sólido distinto por pieza, sin video ni animación — todo DOM y CSS. Sus tres colores
(`#5A8CF6`, `#0A1C43`, `#C8D9FE`) son casi la escala de Terrazul (`azul-400`, `azul-900`,
`azul-100`), así que el ritmo es reproducible sin inventar color.

**Por qué se descartó.** El formato reserva ~205 px por pieza para un visual. Sin fotos de
faena, esas piezas se llenan con diagramas técnicos — y **un corte transversal de un sistema
de impermeabilización es idéntico para Terrazul que para FPM**. Se vería técnico sin probar
nada. Sería un escenario mejor para el mismo contenido sin respaldo.

**Qué lo cambiaría.** Que se resuelva P7. Con fotos reales de cada etapa, el patrón se vuelve
superior al original: las maquetas de Vambe son simuladas; las de Terrazul serían faena real.
Ver [pauta de fotos](PAUTA-DE-FOTOS.md).

---

## D10 · Formulario de contacto ausente

**Hoy:** `/contacto` muestra un bloque con WhatsApp y correo, no un formulario.

**Por qué.** El sitio es estático y el endpoint PHP no corre en Vercel. Un formulario que
envía a un endpoint inexistente **se traga los mensajes en silencio** — la peor falla
posible, porque no se descubre hasta que un cliente reclama que escribió y nadie respondió.

Se activa solo cuando se configure la clave en `FORMULARIO.accessKey` (ver README).

---

## D11 · Correo de contacto

**Hoy:** `mlagos@terrazulspa.cl` (Marcelo, 16-08-2026)

**Antes:** `contacto@terrazulspa.cl` — no funciona correctamente. El brief interno original
mencionaba además `terrazul.spa@gmail.com`, descartado por informal.

---

## Fuentes de la investigación de competencia

Consultadas el 16-08-2026.

**Contratistas especializados (modelo de negocio equivalente):**
[Western Specialty Contractors](https://westernspecialtycontractors.com/) ·
[RAM Construction](https://ramservices.com/) ·
[Restocon](https://www.restocon.com/home) ·
[EP Floors](https://epfloors.com/)

**Fabricantes-instaladores:**
[Stonhard](https://www.stonhard.com/) ·
[Sika](https://usa.sika.com/) ·
[Structural Technologies](https://www.structuraltechnologies.com/)

**Competencia chilena directa:**
[FPM](https://fpm.cl/) ·
[ASANCHEZ](https://asanchez.cl/) ·
[IDRO](https://www.idro.cl/)

**Referencia sectorial:**
[OSIS — cómo se minimiza el downtime](https://www.osisgroup.com/blog?post=how-to-minimize-flooring-downtime)
