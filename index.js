const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => res.send('GET / working'));

app.listen(PORT, () => {
  console.log(`Server running PORT`);
});