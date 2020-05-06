import React from 'react';

const FollowerCard = props => {
    return(
        <>
            <img src={props.avatar_url} alt={props.login} className="HeadShot"></img>
            <h2>Name: {props.login}</h2>
        </>
    );
};

export default FollowerCard;