import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomCard from "./CustomCard";

const MyServizi = () => {
  return (
    <>
      <Container fluid style={{ backgroundImage: 'url("https://www.extron.it/img/mktg/open_graph/esports.jpg")' }}>
        <Container fluid className="m-0 p-0 pt-3">
          <Row className="mx-0">
            <Col xs={"2"}></Col>
            <Col xs={"8"}>
              <h2 className="hServizi" style={{ fontSize: "80px", fontWeight: "900" }}>
                CHI SEI?
              </h2>{" "}
            </Col>
            <Col xs={"2"}></Col>
          </Row>
          <Row className="mx-0 mt-4">
            <Col xs={"2"}></Col>
            <Col xs={"4"}>
              <Link to={"/ProPlayer"}>
                <CustomCard
                  heightImg="400px"
                  widthImg="100%"
                  backcolor="cornflowerblue"
                  title=" PLAYER"
                  imageUrl="https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2023/09/25/14b27e82-ca06-42a7-b7d7-d97fa6481447_b9028916.jpg"
                  description="Un giocatore che vuole migliorare individualmente"
                />
              </Link>
            </Col>
            <Col xs={"4"}>
              <Link to={"/Amatoriale"}>
                <CustomCard
                  heightImg="400px"
                  widthImg="100%"
                  backcolor="orange"
                  title="Squadra"
                  imageUrl="https://www.dire.it/wp-content/uploads/2022/09/nazionale-pallavolo-maschile-.jpeg"
                  description="Un gruppo di amici che vuole migliorare insieme"
                />
              </Link>
            </Col>
          </Row>
          <Row className="mx-0 mt-3 justify-content-center">
            <Col xs={"4"}>
              <Link to={"/organizzazioni"}>
                <CustomCard
                  heightImg="400px"
                  widthImg="100%"
                  backcolor="orange"
                  title="Organizzazioni"
                  imageUrl="https://pbs.twimg.com/profile_images/1685954955113271296/a-9sgd0i_400x400.jpg"
                  description="Una Squadra amatoriale che vuole migliorare insieme"
                />
              </Link>
            </Col>
            <Col xs={"4"}>
              <Link to={"/investitori"}>
                <CustomCard
                  heightImg="400px"
                  widthImg="100%"
                  backcolor="cornflowerblue"
                  title="Investitori"
                  imageUrl="https://www.gazzettinonline.it/wp-content/uploads/2019/09/investitori-1280x720.jpg"
                  description="Sei uno sponsor che cerca il giusto investimento nell'esports?
                   Sei nel posto giusto!"
                />
              </Link>
            </Col>
          </Row>
          <Col style={{ height: "100px" }} xs={"2"}></Col>
        </Container>
      </Container>
    </>
  );
};
export default MyServizi;
