const express = require('express');
const http = require('http');
var compression = require('compression');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(compression());
app.use(cors());
const serverHttp = http.createServer(app);
serverHttp.listen(process.env.HTTP_PORT, process.env.IP);
serverHttp.on('listening', () => console.info(`Notes App running at http://${process.env.IP}:${process.env.HTTP_PORT}`));
app.use(express.static('./public'));

app.get('/api/get-uuid', function (req, res) {
    res.send("id");
});

// 404
app.get('*', function (req, res) {
    res.status(404).send('Error 404 - Recurso no encontrado');
});
