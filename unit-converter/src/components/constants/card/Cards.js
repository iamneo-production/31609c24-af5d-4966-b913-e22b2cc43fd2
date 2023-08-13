import React from "react";
import "./Card.css";
import { Card, CardBody, CardText, CardTitle} from "reactstrap";

const Cards = ({ title, text}) => {
  return (
    <Card className="cardComponent shadow p-3 mb-5 bg-white rounded">
      <CardBody className="hover-zoom">
        <CardTitle><b>{title}</b></CardTitle>
        <CardText>{text}</CardText>
      </CardBody>
    </Card>
  );
};

export default Cards;