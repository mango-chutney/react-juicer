import React, { Component } from 'react';
import Juicer from 'react-juicer';

class App extends Component {
  render() {
    return (
      <div>
        <Juicer feedId="theturffarm" imagesPer={18} />
      </div>
    );
  }
}

export default App;
