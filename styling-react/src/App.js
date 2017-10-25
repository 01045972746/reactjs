import React, { Component } from 'react';
import Button from './Components/Button'
import StyledButton from './Components/StyledButton'

class App extends Component {
  render() {
    return (
      <div>
        <StyledButton big>버튼2</StyledButton>
      </div>
    );
  }
}

export default App;
