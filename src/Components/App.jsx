import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ''
    }
  }

  componentDidMount() {
    const setState = (value) => {
      this.setState({data: value});
    }
    console.log('Component Mounted');
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/relatedlisting',
      contentType: 'application/json',
      success: (data) => {
        setState(data);
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

// const title = 'Hey Bud'

// const App = () => {
//   return <div>{title}</div>
// }


export default App;