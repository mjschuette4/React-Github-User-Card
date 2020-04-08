import React from 'react';
import axios from "axios";
import './App.css';
import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowerCard";

class App extends React.Component {
  constructor(){
  super();
    this.state = {
      user: [],
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/mjschuette4`)
      .then(response => {
        console.log(response.data)
        this.setState({
          user: [response.data]
        })
      })
    axios
      .get(`https://api.github.com/users/mjschuette4/followers`)
      .then(response => {
        console.log(response.data)
        this.setState({
          followers: response.data
        });
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Github UserCard</h1>
        {this.state.user.map(item => (
        <UserCard  
          key={item.id}
          name={item.name}
          login={item.login}
          bio={item.bio}
          img={item.avatar_url}
          url={item.html_url}
          location={item.location}
          />
          ))}
          <h2>Followers:</h2>
        <div>
          {this.state.followers.map(item => (
            <FollowerCard
              // key={item.id}
              // login={item.login}
              // img={item.avatar_url}
              // url={item.html_url}
              key={item.id}
              name={item.name}
              login={item.login}
              bio={item.bio}
              img={item.avatar_url}
              url={item.html_url}
              location={item.location}
                />
            ))}
        </div>
      </div>
    )
  }
}

export default App;
