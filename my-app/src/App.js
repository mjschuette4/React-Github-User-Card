import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: [],
      followers: [{}]
    };
  }

  componentDidMount() {
    //step 1
    axios
      .get('https://api.github.com/users/mjschuette4')
      .then( r => {
        console.log(r.data)
        this.setState({
          user: [r.data]
        });
      });
      
    //step 3
    axios
      .get('https://api.github.com/users/mjschuette4/followers')
      .then( r => {
        console.log(r.data)
        this.setState({
          followers: r.data
        });
      });

  }

  render(){
    return (
      <div className="App">
        <h1>Github Cards</h1>
        <div className="UserCard">
          {this.state.user.map(data =>(
          <UserCard 
            key={data.id}
            avatar_url={data.avatar_url}
            login={data.login}
          />
          ))}
        </div>
        <div className="FollowerCard">
          <h2>Hello Followers</h2>
          {this.state.followers.map(data => (
          <FollowerCard
            key={data.id}
            avatar_url={data.avatar_url}
            login={data.login}
          />
          ))}
        </div>
      </div>
    );
  };
};

export default App;
