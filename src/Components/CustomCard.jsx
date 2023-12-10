import React from "react";
import { Card } from "react-bootstrap";

const CustomCard = ({ title, imageUrl, description, backcolor, width, height, widthImg, heightImg }) => {
  return (
    <Card className="custom-card" style={{ backgroundColor: backcolor, width: width, height: height }}>
      <Card.Title className="title">{title}</Card.Title>
      <div className="card-image" style={{ backgroundImage: `url(${imageUrl})`, width: widthImg, height: heightImg }} />
      <Card.Body className="p-0">
        <Card.Text className="description">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default CustomCard;
