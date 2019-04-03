import React from 'react';

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const renderedListing = (props) => {
      return (
      <div>
        <div>{props.Location}</div>
      </div>
      )
    }
    if (this.props.data.length) {
      return this.props.data.map((listing) => { 
        return (
        <div>
          <div>{listing.location}</div>
          <img src={listing.imageUrl} height="25%" width="25%"></img>
        </div>
        )
      })
    }
    return <div>No Data</div>
  }
}

export default Listing;