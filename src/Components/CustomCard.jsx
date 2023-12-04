import React from "react";
import { Card } from "react-bootstrap";

const CustomCard = ({ title, imageUrl, description, backcolor }) => {
  return (
    <Card className="custom-card" style={{ backgroundColor: backcolor }}>
      <Card.Title className="title">{title}</Card.Title>
      <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <Card.Body className="p-0">
        <Card.Text className="description">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default CustomCard;
