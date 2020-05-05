import React from 'react';

const UserCard = props => {
    return (
        <>
            <h2>Hello User</h2>
            <img src={props.avatar_url}></img>
        </>
    );
};

export default UserCard;