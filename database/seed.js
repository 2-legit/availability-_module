// const db = require('./index.js');

var location = ['San Francisco', 'Oakland', 'San Jose'];
var homeType = ['Entire place', 'Private room', 'Hotel Room', 'Shared Room'];

var random = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}
