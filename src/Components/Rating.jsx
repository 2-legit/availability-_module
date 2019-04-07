import React from 'react';

const Rating = (props) => {
  switch (props.rating) {
    case 1:
      return <span className="star">★☆☆☆☆</span>
    case 2:
      return <span className="star">★★☆☆☆</span>
    case 3:
      return <span className="star">★★★☆☆</span>
    case 4:
      return <span className="star">★★★★☆</span>
    case 5:
      return <span className="star">★★★★★</span>
    default:
      return <span className="star">☆☆☆☆☆</span>
  }
}

export default Rating;