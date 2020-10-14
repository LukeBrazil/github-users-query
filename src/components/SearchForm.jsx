import React, { Component } from "react";
import { loadData } from "../utils/loadData";
import UserCardList from "./UserCardList";
import { Route } from "react-router-dom";
import UserProfile from "./UserProfile";

class SearchForm extends Component {
  state = {
    userName: "",
    user: [],
  };

  _handleChange = (user) => {
    this.setState({
      userName: user,
    });
  };

  _handleSubmit = async (event) => {
    event.preventDefault();
    const { userName } = this.state;
    const userData = await loadData(`https://api.github.com/users/${userName}`);
    console.log(userData);
    this.setState({
      user: [...this.state.user, userData],
      userName: "",
    });
  };
  render() {
    const { userName } = this.state;
    return (
      <div>
        <Route exact path='/'>
        <form>
          <label htmlFor="" className="">
            <input
              value={userName}
              type="text"
              onChange={(event) => {
                this._handleChange(event.target.value);
              }}
            />
          </label>
          <button type="submit" className="" onClick={this._handleSubmit}>
            Search User!
          </button>
        </form>
        <UserCardList users={this.state.user} />
        </Route>
        <Route path={`/users/:userName`} component={UserProfile} />
      </div>
    );
  }
}

export default SearchForm;
