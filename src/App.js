import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import Users from './components/user/Users';
import axios from 'axios';
import Search from './components/user/Search';

class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users?client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data, loading: false });

    // console.log(res.data);
  }
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
export default App;
