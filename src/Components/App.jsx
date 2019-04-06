import React from 'react';
import $ from 'jquery';

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
        setStateOfDataKey(data);
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  render() {
    return (
      <div>Hello World</div>
    )
  }
}

export default App;
