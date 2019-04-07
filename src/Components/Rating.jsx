import React from 'react';

const Rating = (props) => {
  if (props.rating === 3) {
    return <span className="star">★★★☆☆</span>
  } else if (props.rating === 4) {
    return <span className="star">★★★★☆</span>
  } else if (props.rating === 5) {
    return <span className="star">★★★★★</span>
  } else {
    return <span className="star">☆☆☆☆☆</span>
  }
}

export default Rating;