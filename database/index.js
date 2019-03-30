const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/relatedlisting', {useNewUrlParser: true});

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose Connection Initialized');
});

// mongoose.Promise = global.Promise;

const listingSchema = new mongoose.Schema({
    roomId: Number,
    imageUrl: String,
    typeOfRoom: String,
    location: String,
    listingTitle: String,
    price: Number,
    rating: Number,
})

var Listing = mongoose.model('Listing', listingSchema);

const getListing = (callback) => {
  Listing.find().
    exec((error, listing) => {
      if (error) {
        callback(error);
      } else {
        callback(null, listing)
      }
    })
}

module.exports.Listing = Listing
module.exports.getListing = getListing

// setTimeout(() => {
//   getListing((error, listing) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(listing);
//     }
//   })
// }, 1000)