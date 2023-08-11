import React from "react";
import "./Card.css";
import { Card, CardBody, CardText, CardTitle, Button } from "reactstrap";

const Cards = ({ title, text, buttonText, buttonFunction }) => {
  return (
    <Card className="cardComponent">
      <CardBody>
        <CardTitle><b>{title}</b></CardTitle>
        <CardText>{text}</CardText>
      </CardBody>
    </Card>
  );
};

export default Cards;