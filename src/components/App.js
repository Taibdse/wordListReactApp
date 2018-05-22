import React, { Component } from 'react';
import './App.css';
import WordsList from './wordsList.component';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className = "text-center">This is app about word </h1>
          <WordsList/>
      </div>
    );
  }
}

export default App;
