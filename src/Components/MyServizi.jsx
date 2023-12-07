import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomCard from "./CustomCard";

const MyServizi = () => {
  return (
    <>
      <Container
        fluid
        style={{ backgroundImage: 'url("https://www.extron.it/img/mktg/open_graph/esports.jpg")', height: "100vh" }}
      >
        <div className="d-flex">
          <div style={{ width: "25%" }}></div>
          {/* <div className="py-3" style={{ width: "50%", objectFit: "contain" }}>
            <img
              className="w-25"
              src="https://storage.googleapis.com/studio-design-asset-files/projects/BVqXwApQOR/s-484x592_webp_c57a46f8-8b89-40c3-a900-715aec7715b8.webp"
              alt="logo highscore"
            ></img>
          </div> */}
          <div style={{ width: "25%" }}></div>
        </div>
        <Container fluid className="m-0 p-0 pt-5">
          <Row className="mx-0">
            <Col style={{ height: "100px" }} xs={"2"}></Col>
            <Col xs={"8"}>
              <h2 className="hServizi" style={{ fontSize: "80px", fontWeight: "900" }}>
                CHI SEI?
              </h2>{" "}
            </Col>
            <Col style={{ height: "100px" }} xs={"2"}></Col>
          </Row>
          <Row className="mx-0 mt-4">
            <Col style={{ height: "100px" }} xs={"2"}></Col>
            <Col xs={"4"}>
              <Link to={"/Amatoriale"}>
                <CustomCard
                  backcolor="orange"
                  title="AMATORIALE"
                  imageUrl="https://www.igizmo.it/wp-content/uploads/2023/07/Videogiochi.jpeg"
                  description="un Giocatore Amatoriale è colui che gioca occasionalmente, che vuole vincere ma senza prendere sul serio la competizione"
                />
              </Link>
            </Col>
            <Col xs={"4"}>
              <Link to={"/ProPlayer"}>
                <CustomCard
                  backcolor="cornflowerblue"
                  title="PRO PLAYER"
                  imageUrl="https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2023/09/25/14b27e82-ca06-42a7-b7d7-d97fa6481447_b9028916.jpg"
                  description="un Pro player è un giocatore professionista ed è un vero e proprio atleta il quale viene pagato per giocare"
                />
              </Link>
            </Col>
            <Col style={{ height: "100px" }} xs={"2"}></Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default MyServizi;
