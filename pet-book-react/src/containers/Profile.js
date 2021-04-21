import React from 'react';
import { fetchUserData, cancelFetch } from '../dataFetcher.js';
import { UserList } from './UserList';

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null
    }
  }

  componentDidMount() {
    this.loadUserData();
  }

  componentDidUpdate(prevProps) {
    if(this.props.username !== prevProps.username) {
      cancelFetch(this.fetchID);
      this.loadUserData();
    }
  }

  componentWillUnmount() {
    cancelFetch(this.fetchID);
  }

  loadUserData() {
    this.setState({ userData : null});
    this.fetchID = fetchUserData(this.props.username, (userData) => {
      this.setState({ userData: userData });
    });
  }

  render() {
    const isLoading = this.state.userData === null;

    let className = 'Profile';
    if (isLoading) {
      className += ' loading';
    }
    let name, bio, friends; 
    if (isLoading) {
      name = "Loading...";
      bio = "here comes my bio";
      friends = [];
    } else {
      name = this.state.userData.name;
      bio = this.state.userData.bio;
      friends = this.state.userData.friends;
    }
    return (
      <div className={className}>
        <div className="profile-picture">
        {!isLoading && (<img src={this.state.userData.profilePictureUrl} alt="" />)}
        </div>
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>My friends</h3>
          <UserList usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }
}