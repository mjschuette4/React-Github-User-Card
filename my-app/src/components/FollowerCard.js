import React from 'react';

const FollowerCard = props => {
    return(
        <>
            <img src={props.avatar_url} alt={props.login}></img>
        </>
    );
};

export default FollowerCard;