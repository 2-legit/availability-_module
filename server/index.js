const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(`${__dirname}/../dist/`));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/relatedlisting', (req, res) => {
  console.log('GET Invoked');
  db.getListing((error, listing) => {
    if (error) {
      console.log(error);
    } else {
      res.end(JSON.stringify(listing));
    }
  });
});


const port = 3003;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
