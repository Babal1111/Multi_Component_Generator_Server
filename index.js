const express = require('express');
const app = express();
const port = 3001; // Port for the backend server

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
hiii