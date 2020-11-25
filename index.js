const express = require('express');
const app = express();

let counter = 0;

let allNows = [];

app.get('/', (req, res) => {
    res.send('Hello World');
    counter++;
    //Getting date
    const now = new Date();
    allNows.push(now)
})

app.get('/stats', (req, res) => {
  res.send(counter + " visitors");
})

const port = 3000;
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

