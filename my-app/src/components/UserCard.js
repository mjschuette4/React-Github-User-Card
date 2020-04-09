import React from "react";

const UserCard = props => {
  return (
    <div>
      <img src={props.img} width="30%" alt={props.login}></img>
      <h2>{props.name}</h2>
      <span>
        <a href={props.url}>Profile</a>
      </span>

      <p>Bio: {props.bio}</p>
      <p>Location: {props.location}</p>
    </div>
  );
};

export default UserCard;