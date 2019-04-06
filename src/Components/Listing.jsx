import React from 'react';
import styles from './styles.css';

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { data } = this.props;
    if (data.length) {
      return data.map((listing) => { 
        return (
          <div key={listing.roomId}>
            <img src={listing.imageUrl} alt ="" height="25%" width="25%" />
            <div className="roomType">
              <span>{listing.typeOfRoom}</span>
              <span> &#8226; </span>
              <span>{listing.location}</span>
            </div>
            <div className="roomDescription">{listing.listingTitle}</div>
            <div className="price">${listing.price} per night</div>
            <div className="rating">{listing.rating} stars</div>
          </div>
        )
      })
    }
    return <div>No Data</div>
  }
}

export default Listing;