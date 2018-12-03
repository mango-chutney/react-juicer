import React, { Component } from 'react';
import Juicer from 'react-juicer';

class App extends Component {
  render() {
    return <Juicer feedId="mangodashboard" imagesPer={18} />;
  }
}

export default App;
