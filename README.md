# Bienvenido a orion-simple-consumer

## Instrucciones 

### Los siguientes cambios se deben llevar a cabo en el archivo routes/index.js

1. Importar la ngsi-parser y ocb-sender
```js
  var ocb = require("ocb-sender");
  var ngsi = require("ngsi-parser");
```
2. Configurar el ocb-sender
```js
  ocb.config('http://35.185.120.11:1026/v2')
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
```
3. Crear una consulta utilizando ngsi.createQuery
```js
  let query = ngsi.createQuery({
      "id":".*",
      "type":"fiware",
      "options":"keyValues",
    })
```
4. Consultar las entidades y retornarlas en una pagina html en /entities
```js
  ocb.getWithQuery(query)
  .then((result) => {
    res.render('index', { entities: result.body });
  })
  .catch((err) => {
    res.render('index', { entities: {} });
  })
```
5. Mostrar en /notify el contenido de la notificación
```js
   console.log(req.body.data[0]);
```
