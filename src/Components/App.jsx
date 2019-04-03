import React from 'react';
import $ from 'jquery';
import Listing from './Listing.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ''
    }
  }

  componentDidMount() {
    const setState = (value) => {
      this.setState({data: value });
    }
    console.log('Component Mounted');
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/relatedlisting',
      contentType: 'application/json',
      success: (data) => {
        setState(JSON.parse(data));
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  render() {
    return (
      <div>
        <div>Hello World</div>
        <Listing data={ this.state.data }/>
      </div>
    )
  }
}

export default App;
