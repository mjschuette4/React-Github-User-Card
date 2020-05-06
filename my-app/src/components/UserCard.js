import React from 'react';

const UserCard = props => {
    return (
        <>
            <h2>{props.login}</h2>
            <img src={props.avatar_url} alt={props.login} className="HeadShot"></img>
            <h2>Bio: {props.bio}</h2>
            <h3>{props.location}</h3>
            <h3>followers: {props.followers}</h3>
            <h3>following: {props.following}</h3>
        </>
    );
};

export default UserCard;