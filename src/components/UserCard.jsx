import React from "react";
import { Link } from 'react-router-dom';

const UserCard = (props) => {
  return (
    <div>
      <li key={props.id}>
        <img src={props.avatar_url} alt={`${props.name}`} ></img>
        <Link to={`/users/${props.login}`}>Profile!</Link>
      </li>
    </div>
  );
};

export default UserCard;
