import React from 'react';
import axios from 'axios';
import UserList from './Components/UserList';
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      data: [],
      followers: []
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/NadeemAnvaritafti')
    .then(response => {
      console.log(response);
      this.setState({
        data: response.data
      });
    })
    .catch(error => {
      console.log('Error: ', error);
    });
    
    axios.get('https://api.github.com/users/NadeemAnvaritafti/followers')
    .then(response => {
      console.log(response);
      this.setState({
        followers: response.data
      });
    })
    .catch(error => {
      console.log('Error: ', error);
    });
  }


  
  render() {
    return (
      <div className="App">
        <h1>Github User Cards</h1>
        <UserList data={this.state.data} followers={this.state.followers} />
      </div>
    );
  }

}

export default App;
