const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../database/index.js');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/../dist/'));


app.get('/relatedlisting', (req, res) => {
  console.log('GET Invoked')
  db.getListing((error, listing) => {
    if (error) {
      console.log(error);
    } else {
      // res.end(JSON.stringify(listing));
      res.end(JSON.stringify(listing));
    }
  })
  // res.end('Good Job');
})


let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});