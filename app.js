const express = require('express');
const app = express();

app.get('/', (req, res) => res.send( {'message': 'Hello Aktia!'} ));

module.exports = app;
