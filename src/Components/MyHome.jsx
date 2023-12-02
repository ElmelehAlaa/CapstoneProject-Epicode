import { Col, Container, Row } from "react-bootstrap";

const MyHome = () => {
  return (
    <>
      <div className="d-flex">
        <div style={{ width: "25%", backgroundColor: "dodgerblue" }}></div>
        <div className="py-3" style={{ width: "50%", backgroundColor: "orange", objectFit: "contain" }}>
          <img
            className="w-50"
            src="https://storage.googleapis.com/studio-design-asset-files/projects/BVqXwApQOR/s-484x592_webp_c57a46f8-8b89-40c3-a900-715aec7715b8.webp"
            alt="logo highscore"
          ></img>
        </div>
        <div style={{ width: "25%", backgroundColor: "white" }}></div>
      </div>
      <Container fluid className="m-0 p-0 pt-5">
        <Row className="mx-0">
          <Col style={{ backgroundColor: "green", height: "100px" }} xs={"2"}></Col>
          <Col xs={"8"}>
            <h2 style={{ fontSize: "80px", fontWeight: "900" }}>CHI SEI?</h2>{" "}
          </Col>
          <Col style={{ backgroundColor: "green", height: "100px" }} xs={"2"}></Col>
        </Row>
        <Row className="mx-0 mt-4">
          <Col style={{ backgroundColor: "green", height: "100px" }} xs={"2"}></Col>
          <Col xs={"4"}>
            <h3>AMATORIALE</h3>
          </Col>
          <Col xs={"4"}>
            <h3>PRO PLAYER</h3>
          </Col>
          <Col style={{ backgroundColor: "green", height: "100px" }} xs={"2"}></Col>
        </Row>
      </Container>
    </>
  );
};
export default MyHome;
