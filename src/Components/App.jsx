import React from 'react';
import $ from 'jquery';
import Listing from './Listing';

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
      url: 'http://localhost:3000/relatedlisting',
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
        <Listing data={ data }/>
      </div>
    )
  }
}

export default App;
