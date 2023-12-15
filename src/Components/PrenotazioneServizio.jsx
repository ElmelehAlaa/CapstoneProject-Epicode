import { Button, Card, Col, Container, Row } from "react-bootstrap";
import myImage from "../Assets/Background.jpg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const PrenotazioneServizio = () => {
  const [servizioSelezionato, setServizioSelezionato] = useState(null);
  const location = useLocation();

  const fetchServizioSelezionato = async () => {
    try {
      const response = await fetch(`http://localhost:3001/servizi/${location.state} `, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const result = await response.json();
      setServizioSelezionato(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchServizioSelezionato();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      fluid
      className="p-0"
      style={{ backgroundImage: `url(${myImage})`, height: "100vh", backgroundSize: "cover", paddingTop: "50px" }}
    >
      <Row>
        <Col xs={"4"} className="m-auto">
          <Card className="mt-5">
            {servizioSelezionato !== null && servizioSelezionato !== undefined && (
              <>
                <Card.Img variant="top" src={servizioSelezionato.imgUrl} />
                <Card.Body>
                  <Card.Title>{servizioSelezionato.title}</Card.Title>
                  <Card.Text>{servizioSelezionato.description}</Card.Text>

                  {servizioSelezionato.costo !== 0 ? (
                    <Card.Text> Costo: 4{servizioSelezionato.costo}$</Card.Text>
                  ) : (
                    <Card.Text> Contattaci per il prezzo</Card.Text>
                  )}

                  <Card.Text> Servizio: 1 mese di Coaching completo dai nostri Coach professionisti </Card.Text>

                  <Button variant="primary">{servizioSelezionato.costo !== 0 ? "Purchase" : "Contattaci"}</Button>
                </Card.Body>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default PrenotazioneServizio;
