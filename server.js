require('dotenv').config()
const express = require('express');
const routes = require('./routes.js')
const app = express();
const port = process.env.PORT || 3000;
const library = process.env.LIBRARY || __dirname + '/library'

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(__dirname + '/static'));
app.use(express.static(library));
app.use("/", routes)

app.use(function (req, res) {
    res.status(400);
    res.send("<html><head><title>404</title></head><body><h1>404</h1><h3>No se encontro lo que estas buscando :(</3></body>");
});

app.use(function (error, req, next) {
    res.status(500);
    res.send("<html><head><title>500</title></head><body><h1>500</h1><h3>Hubo un problema en el servidor :(</3></body>");
});

app.listen(port, () => {
    console.log('Calipso is running on port ' + port)
})