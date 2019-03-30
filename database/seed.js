const db = require('./index.js');
const faker = require('faker');

var bayLocation = ['San Francisco', 'Oakland', 'San Jose'];

var homeType = ['Entire place', 'Private room', 'Hotel Room', 'Shared Room'];

var homeDescriptor = ['Studio', 'Loft', 'Apartment', 'House', 'Home', 'Condo', 'Cabin', 'Sweet', 'Duplex', 'Town-Home', 'Villa', 'Vacation-House', 'Yurt', 'Bungaloo', 'Chalet', 'Penthouse', 'Terrace', 'Cottage'];

var random = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

for (var i = 0; i < 100; i++) {

  const adjective = faker.fake("{{company.bsAdjective}}")
  const capitalizedAdj = adjective[0].toUpperCase().concat(adjective.slice(1));
  const distric = faker.fake("{{address.city}}");
  const fullDescription = (capitalizedAdj + " " + random(homeDescriptor) + " in " + distric);
  
  db.Listing.create({
    roomId: i,
    imageUrl: `https://s3-us-west-1.amazonaws.com/relatedlistings/relatedListings/listing${(getRandomInt(1, 35))}.jpg`,
    typeOfRoom: random(homeType),
    location: random(bayLocation),
    listingTitle: fullDescription,
    price: getRandomInt(50, 250),
    rating: getRandomInt(3, 6),
  }, (error, listing) => {
    if (error) {
      return handleError(error);
    } else {
      console.log(listing);
    }
  })
}
