import React from 'react';
import styles from './styles.css'

const Rating = (props) => {
  switch (props.rating) {
    case 1:
      return <span className={styles.star}>★☆☆☆☆</span>
    case 2:
      return <span className={styles.star}>★★☆☆☆</span>
    case 3:
      return <span className={styles.star}>★★★☆☆</span>
    case 4:
      return <span className={styles.star}>★★★★☆</span>
    case 5:
      return <span className={styles.star}>★★★★★</span>
    default:
      return <span className={styles.star}>☆☆☆☆☆</span>
  }
}

export default Rating;