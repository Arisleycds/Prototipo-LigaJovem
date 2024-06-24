const express = require('express');
const http = require('http');
const { dirname } = require('path');

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

const DenunBank = []; //Array de Denúncias

app.get('/', (req, res) => {
      res.sendFile(__dirname + "/test.html")
})

io.on("connection", (socket) => {
      console.log(socket.id)

      socket.on("base64 file", 
            (msg) => {
                  DenunBank.push(msg);
                  consosle.log("Recebido");
            }
      );
})

server.listen(3000, () => {
      console.log("Servidor Aberto");
})