import React from 'react';

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
          <div>
            <img src={listing.imageUrl} alt ="" height="25%" width="25%" />
            <div>
              <span>{listing.typeOfRoom}</span>
              <span> &#8226; </span>
              <span>{listing.location}</span>
            </div>
            <div>{listing.listingTitle}</div>
            <div>${listing.price} per night</div>
            <div>{listing.rating} stars</div>
          </div>
        )
      })
    }
    return <div>No Data</div>
  }
}

export default Listing;