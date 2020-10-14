import React, { Component } from 'react';

 class UserProfile extends Component {
         state = {
             repoList: []
         }
     

     async componentDidMount() {
         const { userName } = this.props.match.params;
         const response = await fetch (`https://api.github.com/users/${userName}/repos`);
         const repoList = await response.json();
         this.setState ({
             repoList
         })
     }
     
    render() {
        const { repoList } = this.state
        return (
            <div>
                <p className="">Github Repositories: </p>
                <ul className="">
                    {repoList.map(repo => {
                        return <li key={repo.id}>{repo.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default UserProfile;




// import React from "react";
// import { useParams } from "react-router-dom";

// const UserProfile = (props) => {
//   const { users } = props;
//   const { userName } = useParams();
//   const user = users.find((user) => {
//     return user.login === userName ? user : null;
//   });
//   return (
//     <div>
//       <p>{user.name}</p>
//       <p>{user.bio}</p>
//       <p>Followers: {user.followers}</p>
//       <p>{user.location}</p>
//     </div>
//   );
// };

// export default UserProfile;
