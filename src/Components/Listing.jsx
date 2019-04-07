import React from 'react';
import Rating from './Rating';
import styles from './styles.css';

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  };

  render() {
    const { listing } = this.props; 
    return (
      <div key={listing.roomId} className="listing">
        <img src={listing.imageUrl} alt ="" height="25%" width="25%" />
        <div className="roomType">
          <span>{listing.typeOfRoom}</span>
          <span> &#8226; </span>
          <span>{listing.location}</span>
        </div>
        <div className="roomDescription">{listing.listingTitle}</div>
        <div className="price">${listing.price} per night</div>
        <Rating rating={listing.rating}/>
      </div>
    )
  }
}

export default Listing;