import { Col, Container, Row } from "react-bootstrap";

const MyPrenotazioni = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={"12"}>
            <h2 style={{ color: "orange", fontSize: "80px" }}>I MIEI ORDINI</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyPrenotazioni;
