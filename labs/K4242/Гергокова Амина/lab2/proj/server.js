const express = require('express');
const cors = require('cors');
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const jwt = require('jsonwebtoken');

const server = express();
server.use(cors());
server.use(express.json());
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.db = router.db;

// Регистрация 
server.post('/register', (req, res) => {
  const { username, email, password, group } = req.body;

  if (!username || !email || !password || !group) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const existingUser = server.db.get('users').find({ email }).value();
  if (existingUser) {
    return res.status(400).json({ error: 'User with this email already exists' });
  }
  const newUser = {
    id: Date.now(),
    username,
    email,
    password,
    group
  };
  server.db.get('users').push(newUser).write();
  res.json({ success: true, user: newUser });
});

server.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = server.db.get('users').find({ email }).value();
  if (user && user.password === password) {
    const token = jwt.sign({ userId: user.id }, '14ce11d9-a347-41a2-8eef-8a3fa2c652be', { expiresIn: '1h' });
    res.json({ token, username: user.username, email: user.email });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

server.use(auth);
server.use(router);
const PORT = 8081;
server.listen(PORT, () => {
  console.log(`JSON Server with Auth is running on port ${PORT}`);
});