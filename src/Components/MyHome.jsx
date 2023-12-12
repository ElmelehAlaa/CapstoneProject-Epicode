import { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import { fetchMembers, fetchMyProfile } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import MembersImg from "./MembersImg";
import { Link } from "react-router-dom";
import myImage from "../Assets/logo.png";
import ServiceSlider from "./ServiceSlider";

const AnimatedSection = ({ children, reverse }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : `translateX(${reverse ? "-" : ""}500px)`,
    config: { duration: 2000 },
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

const MyHome = () => {
  const [data, setData] = useState(null);
  const myLogin = useSelector((state) => state.login.content);
  const dispatch = useDispatch();
  const membersFetched = useSelector((state) => state.members.content);
  const [showLogo, setShowLogo] = useState(false);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/servizi", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    console.log(data);
    dispatch(fetchMembers());
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowLogo(true);
    fetchData();
    dispatch(fetchMyProfile(myLogin));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/abstract-video-game-scifi-gaming-red-blue-vs-esports-backgound-vr-virtual-reality-simulation-metaverse-scene-stand-pedestal-stage-3d-illustration-rendering-futuristic-neon-glow-room_42100-2309.jpg")',
          color: "white",
        }}
      >
        <Row>
          <Col xs={6} id="logoCol" className={`mx-auto mt-5 ${showLogo ? "show" : ""}`}>
            <img id="logoImg" width={400} src={myImage} alt="logo Highscore" />
          </Col>
        </Row>
        <Row>
          <Col xs={8} className="mx-auto mt-3">
            <h2 className="titleHome">HIGH SCORE ACADEMY</h2>
          </Col>
        </Row>
        <AnimatedSection reverse>
          <Row className="mt-5">
            <Col xs={"5"} style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
              <h4 className=" mt-5 me-5 hHome">Chi siamo:</h4>
              <p className="pHome">
                Siamo un gruppo di coach esperti nel mondo degli esports con oltre 10 anni di esperienza. La nostra
                passione e competenza ci guidano nell'offrire servizi di alta qualità, Condividiamo il nostro know-how
                per aiutare ogni individuo a raggiungere il massimo del suo potenziale nel competitivo universo degli
                esports.
              </p>
            </Col>
          </Row>
        </AnimatedSection>
        <AnimatedSection>
          <Row>
            <Col xs={"6"} className="offset-6" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
              <h4 className=" mt-5 me-5 hHome">La nostra missione</h4>
              <p className="pHome">
                La nostra missione è trasformare gli appassionati di videogiochi in veri e propri atleti. Ci impegniamo
                a fornire servizi di coaching e crescita personalizzati nel mondo degli esports, guidandoti verso il tuo
                massimo potenziale.
              </p>
              <Link to={"/servizi"}>
                <Button>SCOPRI I SERVIZI</Button>
              </Link>
            </Col>
          </Row>
        </AnimatedSection>
        <AnimatedSection reverse>
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
        </AnimatedSection>
        <Row>
          <Col xs={"8"} className="offset-2">
            <h4 className="mt-5 me-5 hHome">Servizi</h4>
          </Col>
          <Col xs={"6"} className="offset-3">
            <div>{data !== null ? <ServiceSlider data={data.content} /> : <div> caricamento...</div>}</div>
          </Col>
        </Row>
        <AnimatedSection>
          <Row id="membriSection" className="mt-5">
            <Col xs={"8"} className="offset-2">
              <h4 className=" mt-5 me-5 hHome">Membri</h4>
            </Col>
            <Col xs={"6"} className="offset-3">
              <div>
                {membersFetched.length !== 0 ? (
                  membersFetched.map((membroSingolo) => (
                    <MembersImg key={membroSingolo.id} imgMembro={membroSingolo.urlAvatar} />
                  ))
                ) : (
                  <div> caricamento...</div>
                )}
              </div>
            </Col>
          </Row>
        </AnimatedSection>
        <Footer />
      </Container>
    </>
  );
};

export default MyHome;
