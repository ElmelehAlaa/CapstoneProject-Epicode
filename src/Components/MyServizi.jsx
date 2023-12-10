import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomCard from "./CustomCard";
import { useEffect, useState } from "react";

const MyServizi = () => {
  const [data, setData] = useState(null);

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
    fetchData();
  }, []);

  return (
    <>
      <Container fluid style={{ backgroundImage: 'url("https://www.extron.it/img/mktg/open_graph/esports.jpg")' }}>
        <Container fluid className="m-0 p-0 pt-3">
          <Row className="mx-0">
            <Col xs={"2"}></Col>
            <Col xs={"8"}>
              <h2 className="hServizi" style={{ fontSize: "100px", fontWeight: "900" }}>
                CHI SEI?
              </h2>{" "}
            </Col>
            <Col xs={"2"}></Col>
          </Row>
          {data !== null && data.content && data.content.length > 0 ? (
            <>
              <Row className="mx-auto mt-4 justify-content-center">
                {data.content.map((servizio, index) => (
                  <Col key={index} xs="12" md="4" className="mt-5  ">
                    <Link to={`/${servizio.title.toLowerCase()}`}>
                      <CustomCard
                        heightImg="500px"
                        widthImg="100%"
                        backcolor={index % 2 === 0 ? "orange" : "cornflowerblue"}
                        title={servizio.title}
                        imageUrl={servizio.imgUrl}
                        description={servizio.description}
                      />
                    </Link>
                  </Col>
                ))}
              </Row>
              <Col xs={"2"}></Col>
            </>
          ) : (
            <div>Caricamento...</div>
          )}
        </Container>
      </Container>
    </>
  );
};
export default MyServizi;
