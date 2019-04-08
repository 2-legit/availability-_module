import React from 'react';
import Listing from './Listing';
import styles from './styles.css';

class AllListings extends React.Component {
  constructor(props) {
    super(props);
    this.scroller = React.createRef();
    this.state = {
      scrollPosition: 0,
    }
  }

  render() {
    const { data } = this.props;

    if (data) {   
      return (
        <div className="allListings" ref="scroller">
        {
          this.state.scrollPosition > 150 && 
          <button type="button" id="leftScroll" onClick={(e)=>{this.setState({scrollPosition:  this.state.scrollPosition - 400}, () => this.refs.scroller.scrollLeft -= 400 ); }}>{'<'}</button>
        }
          {data.map((listing) => {
            return <Listing key={listing.roomId} listing={listing} />
          })}
          <button type="button" id="rightScroll" onClick={(e)=>{this.setState({ scrollPosition:  this.state.scrollPosition + 400}, () => this.refs.scroller.scrollLeft += 400 )}}>{'>'}</button>
        </div>
      )
    }
    return <div> Loading.....   (probably)</div>
  }
}

export default AllListings;
