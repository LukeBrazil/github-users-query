import React, { Component } from "react";
import { Link } from 'react-router-dom';

class UserProfile extends Component {
  state = {
    repoList: [],
    user: [],
  };

  async componentDidMount() {
    const { userName } = this.props.match.params;
    const response = await fetch(
      `https://api.github.com/users/${userName}/repos`
    );
    const response2 = await fetch(`https://api.github.com/users/${userName}`);
    const repoList = await response.json();
    const user = await response2.json();
    this.setState({
      repoList,
      user,
    });
  }

  render() {
    const { repoList } = this.state;
    const { user } = this.state;
    return (
      <div>
          <Link to='/'>Home</Link>
        <p>{user.name}</p>
        <p>{user.bio}</p>
        <p>Followers: {user.followers}</p>
        <p>{user.location}</p>
        <p className="">Github Repositories: </p>
        <ul className="">
          {repoList.map((repo) => {
            return <li key={repo.id}>{repo.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default UserProfile;
