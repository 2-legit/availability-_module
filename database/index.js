const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/relatedlisting', {useNewUrlParser: true});

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose Connection Initialized');
});

const listingSchema = new mongoose.Schema({
    roomId: {
      type: Number,
      unique: true,
    },
    imageUrl: String,
    typeOfRoom: String,
    Location: String,
    listingTitle: String,
    Price: Number,
    Rating: Number,
})

var Listing = mongoose.model('Listing', listingSchema);

//I want to seed my database with one dummy document on script run

var bigTest = new Listing({
  roomId: 111,
  imageUrl: 'https://s3-us-west-1.amazonaws.com/relatedlistings/relatedListings/carlos-hernandez-1236520-unsplash.jpg',
  typeOfRoom: 'Back-House',
  Location: 'Los Angeles',
  listingTitle: 'Amazing house in the heart of city',
  Price: 80,
  Rating: 4
})

// bigTest.save((error, bigTest) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(bigTest);
//   }
// })
