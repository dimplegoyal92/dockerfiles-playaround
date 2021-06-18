const express = require('express');


const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send("App works!!!!!");
});


app.listen(port, (err) => {
  console.log(`running server on from port:::::::${port}`);
});