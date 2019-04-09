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
      <div key={listing.roomId} className={styles.listing}>
        <div className={styles.container}>
          <img onClick={() => this.setState({ isLiked: !this.state.isLiked })} src={listing.imageUrl} alt ="" height="25%"   width="25%" />
          { this.state.isLiked && <div className={styles.heart} /> }
          { !this.state.isLiked && <div className={styles.emptyHeart} />}
        </div>
        <div className={styles.roomType}>
          <span>{listing.typeOfRoom}</span>
          <span> &#8226; </span>
          <span>{listing.location}</span>
        </div>
        <div className={styles.roomDescription}>{listing.listingTitle}</div>
        <div className={styles.price}>${listing.price} per night</div>
        <Rating rating={listing.rating}/>
      </div>
    )
  }
}

export default Listing;