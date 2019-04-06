import React from 'react';
import Listing from './Listing';
import styles from './styles.css';

class AllListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { data } = this.props;
    if (data) {
      return data.map((listing) => {
        return <Listing listing={listing} />
      })
    }
    return <div> Loading.....   (probably)</div>
    // return (
    //   <div>All Listings in One Component</div>
    // )
  }
}

export default AllListings;
