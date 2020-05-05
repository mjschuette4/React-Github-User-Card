import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: [],
      followers: []
    };
  }
  
  render(){
    return (
      <div className="App">
        <h1>Github Cards</h1>
        <UserCard />
        <FollowerCard />
      </div>
    );
  };
};

export default App;
