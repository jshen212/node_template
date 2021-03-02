const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

app.get('/', (req, res) => res.send('GET / working'));

app.listen(PORT, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});