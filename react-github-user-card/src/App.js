import React from 'react';
import axios from 'axios';
import UserList from './Components/UserList';
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      data: [],
      followers: [],
      search: ''
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      axios.get(`https://api.github.com/users/${this.state.search}`)
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error);
      })
    }
    if (prevProps.someValue !== this.props.someValue) {
    }

    if (prevState.followers !== this.state.followers) {
      axios.get(`https://api.github.com/users/${this.state.search}/followers`)
      .then(response => {
        this.setState({
          followers: response.data
        });
      })
      .catch(error => {
        console.log(error);
      })
    }
    if (prevProps.someValue !== this.props.someValue) {
    }
  }

  searchUser = (whatYouTyped) => {
    axios.get(`https://api.github.com/users/${whatYouTyped}`)
    .then(response => {
        this.setState({
          data: response.data
        });
    })
    .catch(error => {
      console.log('Error: ', error)
    })

    axios.get(`https://api.github.com/users/${whatYouTyped}/followers`)
    .then(response => {
        this.setState({
          followers: response.data
        });
    })
    .catch(error => {
      console.log('Error: ', error)
    })
}

  changeHandler = e => {
    this.setState({
        search: e.target.value
    });
  }

  submitHandler = e => {
    e.preventDefault();
    this.searchUser(this.state.search);
    this.setState({
        search: ''
    });
  }



  render() {
    return (
      <div className="App">
        <h1>Github User Cards</h1>
        <div>
          <form onSubmit={this.submitHandler}>
            <input type='text' placeholder='Github Username' value={this.state.search} onChange={this.changeHandler} ></input>
            <button type='submit'>Search</button>
          </form>
        </div>
        <UserList data={this.state.data} followers={this.state.followers} />
      </div>
    );
  }

}

export default App;
