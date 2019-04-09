import React from 'react';
import Listing from './Listing';
import styles from './styles.css';

class AllListings extends React.Component {
  constructor(props) {
    super(props);
    this.scroller = React.createRef();
    this.state = {
      scrollPosition: 0,
      maxScroll: Infinity,
    }
  }

  render() {
    const { data } = this.props;
    const { scrollPosition } = this.state;
    const { maxScroll } = this.state;

    if (data) {   
      return (
        <div className="allListings" ref="scroller">
          {
            scrollPosition > 25 && 
            <button type="button" id="leftScroll" onClick={(e)=>{this.setState({scrollPosition: scrollPosition - 400, maxScroll: this.refs.scroller.scrollWidth - this.refs.scroller.clientWidth }, () => {this.refs.scroller.scrollLeft -= 400 }); }}>{'<'}</button>
          }
          {data.map((listing) => {
            return <Listing key={listing.roomId} listing={listing} />
          })}
          {
           scrollPosition < maxScroll - 25 && 
           <button type="button" id="rightScroll" onClick={(e)=>{ this.setState({ scrollPosition: scrollPosition + 400, maxScroll: this.refs.scroller.scrollWidth - this.refs.scroller.clientWidth }, () => {this.refs.scroller.scrollLeft += 400 })}}>{'>'}</button>
          }
        </div>
      )
    }
    return <div> Loading.....   (probably)</div>
  }
}

export default AllListings;
