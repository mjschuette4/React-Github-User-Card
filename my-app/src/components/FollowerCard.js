import React from "react";
import { Card, CardTitle, CardImg } from "reactstrap";
const FollowerCard = props => {
  return (
    <Card>
      <CardImg src={props.img} alt={props.login}  ></CardImg>
      <CardTitle>
        <a href={props.url} size="30px">{props.login}</a>
      </CardTitle>
    </Card>
  );
};

export default FollowerCard;