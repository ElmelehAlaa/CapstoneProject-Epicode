import { Col, Row } from "react-bootstrap";

const ListService = ({ title, imageUrl, description, reverse }) => {
  return (
    <Row className={`mt-5 mx-auto ${reverse ? "flex-row-reverse" : ""}`}>
      <Col md={6} className="my-5">
        <img src={imageUrl} alt={title} className="img-fluid" style={{ height: "400px" }} />
      </Col>
      <Col md={6} className="d-flex align-items-center">
        <div>
          <h3 className="hServizi">{title}</h3>
          <p className="pServizi">{description}</p>
        </div>
      </Col>
    </Row>
  );
};

export default ListService;
