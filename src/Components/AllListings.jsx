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
    this.leftArrow = this.leftArrow.bind(this);
    this.rightArrow = this.rightArrow.bind(this);
  }

  leftArrow() {
    const { scrollPosition } = this.state;
    this.setState({
      scrollPosition: scrollPosition - 400,
      maxScroll: this.refs.scroller.scrollWidth - this.refs.scroller.clientWidth
    }, () => {this.refs.scroller.scrollLeft -= 400 })
  }

  rightArrow() {
    const { scrollPosition } = this.state;
    this.setState({
      scrollPosition: scrollPosition + 400,
      maxScroll: this.refs.scroller.scrollWidth - this.refs.scroller.clientWidth
    }, () => { this.refs.scroller.scrollLeft += 400 })
  }

  render() {
    const { data } = this.props;
    const { scrollPosition, maxScroll } = this.state;

    if (data) {   
      return (
        <div className={styles.allListings} ref="scroller">
          {
            scrollPosition > 25 && 
            <button type="button" className={styles.leftScroll} onClick={ this.leftArrow }>{'<'}</button>
          }
          { 
            data.map((listing) => {
              return <Listing key={listing.roomId} listing={listing} />
            })
          }
          {
           scrollPosition < maxScroll - 25 && 
           <button type="button" className={styles.rightScroll} onClick={ this.rightArrow }>{'>'}</button>
          }
        </div>
      )
    }
    return <div> Loading.....   (probably)</div>
  }
}

export default AllListings;
