const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/../dist/'));


app.get('/relatedlisting', (req, res) => {
  res.send('this works');
})


let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});