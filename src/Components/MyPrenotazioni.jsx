import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import myImage from "../Assets/Background.jpg";

const MyPrenotazioni = () => {
  const [prenotazioni, setPrenotazioni] = useState(null);
  const myData = useSelector((state) => state.profile.myContent);
  const fetchMyPrenotazioni = async () => {
    try {
      const resp = await fetch(`http://localhost:3001/prenotazioni/${myData.id}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const responsePrenotazioni = await resp.json();
      console.log(responsePrenotazioni);
      setPrenotazioni(responsePrenotazioni);
      return responsePrenotazioni;
    } catch (error) {
      console.log(error);
    }
  };
  const getColorByState = (state) => {
    switch (state) {
      case "IN_ATTESA_DI_CONFERMA":
        return "#cc9900";
      case "CONFERMATA":
        return "green";
      case "COMPLETATA":
        return "blue";
      case "ANNULLATA":
        return "red";
      default:
        return "black";
    }
  };

  useEffect(() => {
    fetchMyPrenotazioni();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container fluid style={{ backgroundImage: `url(${myImage})`, backgroundSize: "cover", minHeight: "100vh" }}>
        <Row>
          <Col xs={"8"} className="m-auto">
            <h2 style={{ color: "orange", fontSize: "80px" }}>I MIEI ORDINI</h2>
          </Col>
          <Col xs={"8"} className="m-auto">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Servizio</th>
                  <th>Data</th>
                  <th>Stato Prenotazione</th>
                </tr>
              </thead>
              <tbody>
                {myData && prenotazioni !== null ? (
                  prenotazioni.map((prenotazione) => (
                    <tr key={prenotazione.id}>
                      <td>{prenotazione.id}</td>
                      <td>{prenotazione.servizio.title}</td>
                      <td>{prenotazione.createdAt.substring(0, 10)}</td>
                      <td style={{ color: getColorByState(prenotazione.prenotazioneStato) }}>
                        {prenotazione.prenotazioneStato ? prenotazione.prenotazioneStato.replace(/_/g, " ") : ""}
                      </td>
                    </tr>
                  ))
                ) : (
                  <div>non ci sono prenotazioni</div>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyPrenotazioni;
