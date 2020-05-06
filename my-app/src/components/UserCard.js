import React from 'react';

const UserCard = props => {
    return (
        <>
            <h2>Hello User</h2>
            <h2>{props.login}</h2>
            <img src={props.avatar_url} alt={props.login}></img>
            <h2>Bio: {props.bio}</h2>
        </>
    );
};

export default UserCard;