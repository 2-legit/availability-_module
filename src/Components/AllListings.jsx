import React from 'react';
import Listing from './Listing';
import styles from './styles.css';

class AllListings extends React.Component {
  constructor(props) {
    super(props);
    this.scroller = React.createRef();
  }

  render() {
    const { data } = this.props;
    if (data) {
      return (
        <div className="allListings" ref="scroller">
          <button type="button" id="leftScroll" onClick={(e)=>{ this.refs.scroller.scrollLeft -= 400; }}>{'<'}</button>
          {data.map((listing) => {
            return <Listing key={listing.roomId} listing={listing} />
          })}
          <button type="button" id="rightScroll" onClick={(e)=>{ this.refs.scroller.scrollLeft += 400; }}>{'>'}</button>
        </div>
      )
    }
    return <div> Loading.....   (probably)</div>
  }
}

export default AllListings;
