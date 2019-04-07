import React from 'react';
import Listing from './Listing';
import styles from './styles.css';

class AllListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.scroller = React.createRef();
  }

  render() {
    const { data } = this.props;
    if (data) {
      return (
        <div className="allListings" ref="scroller">
          <button id="leftScroll" onClick={(e)=>{this.refs.scroller.scrollLeft -= 410}}>{"<"}</button>
          {data.map((listing) => {
            return <Listing key={listing.roomId} listing={listing} />
          })}
          <button id="rightScroll" onClick={(e)=>{this.refs.scroller.scrollLeft += 410}}>{">"}</button>
        </div>
      )
    }
    return <div> Loading.....   (probably)</div>
  }
}

export default AllListings;
