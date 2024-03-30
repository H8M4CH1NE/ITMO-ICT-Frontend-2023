const jsonServer = require('json-server');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const server = express();
const PORT = process.env.PORT || 3001;

server.use(express.static(path.join(__dirname, '../server')));
server.use(bodyParser.json());


const jsonServerRouter = jsonServer.router(path.join(__dirname, '../server/db.json'));
server.use('/api', jsonServerRouter);


server.get('/main', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/index.html'));
});

// server.post('/login', (req, res) => {
//   if (req) {
    
//   }
//   res.sendFile(path.join(__dirname, '../html/index.html'));
// });

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/index.html'));
});

server.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});