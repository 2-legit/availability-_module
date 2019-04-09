import React from 'react';
import Rating from './Rating';
import styles from './styles.css';

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    }
  };

  render() {
    const { listing } = this.props; 
    return (
      <div key={listing.roomId} className="listing">
        <div className="container">
          <img onClick={() => this.setState({ isLiked: !this.state.isLiked })} src={listing.imageUrl} alt ="" height="25%"   width="25%" />
          { this.state.isLiked && <div id="heart" /> }
          { !this.state.isLiked && <div id="emptyHeart" />}
        </div>
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