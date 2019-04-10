import React from 'react';
import $ from 'jquery';
import AllListings from './AllListings';
import styles from './styles.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
    }
  };

  componentDidMount() {
    const setStateOfDataKey = (value) => {
      this.setState({ data: value });
    }
    $.ajax({
      method: 'GET',
      url: '/relatedlisting',
      contentType: 'application/json',
      success: (data) => {
        setStateOfDataKey(JSON.parse(data));
      },
      error: (error) => {
        console.log(error);
      },
    })
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div className={styles.title}>More Homes You May Like</div>
        <AllListings data={ data }/>
      </div>
    )
  }
}

export default App;
