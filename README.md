1. Qué he hecho:

He entrado a backend/src/hello.ts y he cambiado el mensaje por "Festival Control · equipo preparado"

    He añadido el campo "service": "hello" dentro del JSON.stringify

    He dejado intactos los tipos de TypeScript (APIGatewayProxy...), el console.log, el statusCode: 200 y el archivo serverless.yml

2. Cómo he comprobado que funciona:

   He parado el servidor local en la terminal con Ctrl + C

   He pasado el corrector con npm run typecheck (sin fallos) y he vuelto a arrancar con npm start para que se recompilase el código a JavaScript (dist/)

   He hecho una petición a la URL con Postman y con curl

   He comprobado que devuelve el nuevo JSON con el mensaje y el servicio, y que en la terminal sale el log de la llamada

   # Bloque 02

## Resultado

- He añadido: Nueva ruta dinámica en la configuración de la API (definida como /events/{id}) y la lógica en el handler de TypeScript para extraer y leer el parámetro de ruta desde el evento de invocación

- Ruta o pantalla comprobada: GET /events/EVT-104 (invocada vía navegador)

- Estado y respuesta observados: Código HTTP 200 OK. Se recibió un objeto JSON simulado con los datos del evento, reflejando o confirmando el identificador "EVT-104" recibido en el contexto

## Comprensión

- Recorrido del dato, explicado con mis palabras: El cliente envía `EVT-104` en la URL. API Gateway lo coloca en `event.pathParameters.id`, el handler `getEvent` lo lee y lo devuelve dentro de la respuesta JSON junto con los datos simulados del evento.
- Cambio guiado y resultado: Añadí la función `getEvent`, la ruta dinámica `/events/{id}` en `serverless.yml` y la comprobación de que el identificador existe. La petición devuelve los datos del evento con código `200`.
- Error encontrado y cómo lo resolví: Al trabajar con un parámetro de ruta que puede no existir, usé `event.pathParameters?.id` y devolví `400` con el mensaje `Falta id` cuando no se recibe ningún identificador.

## Evidencias

- {"id":"EVT-104","artist":"Neon Waves","space":"Main Stage","time":"22:30","status":"CONFIRMED"}

# Bloque 03

## Resultado

- Qué añadí al proyecto: Añadí el handler `createEvent` y la ruta `POST /events` para recibir los datos de un nuevo evento. El handler valida que el cuerpo sea un objeto JSON y que incluya `artist`, `space` y `time` con formato `HH:mm`. También acepta `status` con los valores `CONFIRMED` o `CANCELLED`; si no se envía, usa `CONFIRMED`.
- Ruta o pantalla comprobada: `POST /events`, enviando un cuerpo JSON como `{"artist":"Neon Waves","space":"Main Stage","time":"22:30"}`.
- Estado y respuesta observados: La respuesta correcta devuelve código HTTP `201` y un objeto JSON con el identificador simulado `EVT-NEW`, los datos recibidos y el estado `CONFIRMED`.

## Comprensión

- Recorrido del dato, explicado con mis palabras: El cliente envía un JSON en el cuerpo de la petición. El handler lo convierte desde texto, comprueba los campos y sus formatos, limpia los textos de artista y espacio y construye la respuesta del nuevo evento.
- Cambio guiado y resultado: Configuré la ruta `POST /events` para usar `dist/createEvent.handler` y añadí validaciones para evitar cuerpos vacíos, JSON inválido, horas incorrectas y estados no permitidos.
- Error encontrado y cómo lo resolví: Para que una petición incorrecta no provoque un error interno, capturé el fallo de `JSON.parse` y devolví `400` con un mensaje claro. También añadí respuestas `400` específicas para los datos obligatorios y el estado.

## Evidencias

- Captura o transcripción breve, sin credenciales:
  - Petición: `POST /events`
  - Cuerpo: `{"artist":"Neon Waves","space":"Main Stage","time":"22:30"}`
  - Respuesta: `201 {"id":"EVT-NEW","artist":"Neon Waves","space":"Main Stage","time":"22:30","status":"CONFIRMED"}`
- Limitaciones del ejercicio: Los eventos no se guardan en una base de datos; `EVT-NEW` y los datos de respuesta son simulados. Tampoco se ha añadido autenticación ni una capa de persistencia, por lo que los datos se pierden al terminar la invocación.

# Bloque 06

## Resultado

- Qué añadí al proyecto:
- Ruta o pantalla comprobada:
- Estado y respuesta observados:

## Comprensión

- Recorrido del dato, explicado con mis palabras:
- Cambio guiado y resultado:
- Error encontrado y cómo lo resolví:

## Evidencias

GET
http://localhost:3000/dev/eventa
Estado
404
Not Found
VersiónHTTP/1.1
Transferido663 B (tamaño 284 B)
Política de referenciastrict-origin-when-cross-origin
Prioridad de la solicitudHighest
Resolución DNSSistema
