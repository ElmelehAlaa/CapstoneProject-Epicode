import { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const MyHome = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(true);
    }, 100);
  }, []);

  return (
    <>
      <Container
        fluid
        style={{ backgroundImage: 'url("https://www.extron.it/img/mktg/open_graph/esports.jpg")', color: "white" }}
      >
        <Row>
          <Col xs={6} id="logoCol" className={`mx-auto mt-5 ${showLogo ? "show" : ""}`}>
            <img
              id="logoImg"
              width={400}
              src="https://1000logos.net/wp-content/uploads/2021/04/Fnatic-logo.png"
              alt="logo Highscore"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={8} className="mx-auto mt-3">
            <h2 className="titleHome">HIGH SCORE ACADEMY</h2>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={"5"} style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <h4 className=" mt-5 me-5 hHome">Chi siamo:</h4>
            <p className="pHome">
              Siamo un gruppo di coach esperti nel mondo degli esports con oltre 10 anni di esperienza. La nostra
              passione e competenza ci guidano nell'offrire servizi di alta qualità, Condividiamo il nostro know-how per
              aiutare ogni individuo a raggiungere il massimo del suo potenziale nel competitivo universo degli esports.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={"6"} className="offset-6" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <h4 className=" mt-5 me-5 hHome">La nostra missione</h4>
            <p className="pHome">
              La nostra missione è trasformare gli appassionati di videogiochi in veri e propri atleti. Ci impegniamo a
              fornire servizi di coaching e crescita personalizzati nel mondo degli esports, guidandoti verso il tuo
              massimo potenziale.
            </p>
            <Link to={"/Servizi"}>
              <Button>SCOPRI I SERVIZI</Button>
            </Link>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={"5"} style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <h4 className=" mt-5 me-5 hHome">i Nostri traguardi:</h4>
            <p className="pHome">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reprehenderit, quos distinctio
              dignissimos, asperiores nesciunt itaque impedit dolorum cupiditate, quam sint. Quasi dolor sunt libero
              provident praesentium alias repudiandae maxime?
            </p>
          </Col>
        </Row>
        <Row id="membriSection" className="mt-5">
          <Col xs={"8"} className="offset-2">
            <h4 className=" mt-5 me-5 hHome">Membri</h4>
          </Col>
          <Col xs={"6"} className="offset-3">
            <div>
              <img
                className="imgMembers"
                width={150}
                src="https://storage.googleapis.com/studio-cms-assets/projects/BVqXwApQOR/s-400x400_webp_de30c1a6-dfed-43c5-b15d-e8750968972c.webp"
                alt="foto-member"
              ></img>
              <img
                className="imgMembers"
                width={150}
                src="https://storage.googleapis.com/studio-cms-assets/projects/BVqXwApQOR/s-400x400_webp_de30c1a6-dfed-43c5-b15d-e8750968972c.webp"
                alt="foto-member"
              ></img>
              <img
                className="imgMembers"
                width={150}
                src="https://storage.googleapis.com/studio-cms-assets/projects/BVqXwApQOR/s-400x400_webp_de30c1a6-dfed-43c5-b15d-e8750968972c.webp"
                alt="foto-member"
              ></img>
              <img
                className="imgMembers"
                width={150}
                src="https://storage.googleapis.com/studio-cms-assets/projects/BVqXwApQOR/s-400x400_webp_de30c1a6-dfed-43c5-b15d-e8750968972c.webp"
                alt="foto-member"
              ></img>
              <img
                className="imgMembers"
                width={150}
                src="https://storage.googleapis.com/studio-cms-assets/projects/BVqXwApQOR/s-400x400_webp_de30c1a6-dfed-43c5-b15d-e8750968972c.webp"
                alt="foto-member"
              ></img>
              <img
                className="imgMembers"
                width={150}
                src="https://storage.googleapis.com/studio-cms-assets/projects/BVqXwApQOR/s-400x400_webp_de30c1a6-dfed-43c5-b15d-e8750968972c.webp"
                alt="foto-member"
              ></img>
              <img
                className="imgMembers"
                width={150}
                src="https://storage.googleapis.com/studio-cms-assets/projects/BVqXwApQOR/s-400x400_webp_de30c1a6-dfed-43c5-b15d-e8750968972c.webp"
                alt="foto-member"
              ></img>
              <img
                className="imgMembers"
                width={150}
                src="https://storage.googleapis.com/studio-cms-assets/projects/BVqXwApQOR/s-400x400_webp_de30c1a6-dfed-43c5-b15d-e8750968972c.webp"
                alt="foto-member"
              ></img>
              <img
                className="imgMembers"
                width={150}
                src="https://storage.googleapis.com/studio-cms-assets/projects/BVqXwApQOR/s-400x400_webp_de30c1a6-dfed-43c5-b15d-e8750968972c.webp"
                alt="foto-member"
              ></img>
              <img
                className="imgMembers"
                width={150}
                src="https://storage.googleapis.com/studio-cms-assets/projects/BVqXwApQOR/s-400x400_webp_de30c1a6-dfed-43c5-b15d-e8750968972c.webp"
                alt="foto-member"
              ></img>
            </div>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
};

export default MyHome;
