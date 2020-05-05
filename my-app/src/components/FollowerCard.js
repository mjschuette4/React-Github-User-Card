import React from 'react';

const FollowerCard = props => {
    return(
        <>
            <h2>Hello Followers</h2>
            <img src={props.avatar_url}></img>
        </>
    );
};

export default FollowerCard;