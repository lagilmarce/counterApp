const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;

// settings
app.engine('handlebars', hbs({
  defaultLayout: 'main', 
  layoutsDir: path.join(__dirname, 'views/layouts')}));
app.set('view engine', 'handlebars');


//Visits
let allNows = [];

//Routing

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
    //Getting date
    const now = new Date();
    allNows.push(now);
    console.log(allNows)
})

//for (let i = 0; i <= allNows.length; i++)


app.get('/stats', (req, res) => {
  res.render('stats', {
    total: allNows.length,
    allNows: allNows,
    title: 'Stats'
  })
  //res.send(allNows.length + " visitors");
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

