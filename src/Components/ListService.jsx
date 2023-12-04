import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const ListService = ({ title, imageUrl, description, reverse }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : `translateX(${reverse ? "-" : ""}400px)`,
    config: { duration: 1000 },
  });

  return (
    <animated.div ref={ref} style={props}>
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
    </animated.div>
  );
};

export default ListService;
