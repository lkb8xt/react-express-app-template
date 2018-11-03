import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserListContainer from './components/UserListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserListContainer />
      </div>
    );
  }
}

export default App;
