import React, { Component } from 'react'
import { loadData } from "../utils/loadData";

 class SearchForm extends Component {
     state = {
         userName: '',
         user: [],
     }

     _handleChange = (user) => {
        this.setState({
            userName: user, 
            
        })
    }

    _handleSubmit = () => {
        const { userName } = this.state
        const userData =  loadData(`https://api.github.com/users/${userName}`);
        this.setState({
            user: [userData]
        })
    }
    render() {
        const { userName } = this.state;
        return (
            <div>
                <form>
                <label htmlFor="" className="">
                    <input type="text" onChange={event => {
                        this._handleChange(event.target.value)
                    }}/>
                </label>
                <button type='submit' className="" onSubmit={this._handleSubmit}>Search User!</button>
                </form>
            </div>
        )
    }
}

export default SearchForm;
 

// Api url https://api.github.com/users/[username]