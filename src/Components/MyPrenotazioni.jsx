import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

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
  useEffect(() => {
    fetchMyPrenotazioni();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col xs={"12"}>
            <h2 style={{ color: "orange", fontSize: "80px" }}>I MIEI ORDINI</h2>
          </Col>
          <Col xs={"12"}>
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
                      <td>{prenotazione.createdAt}</td>
                      <td>{prenotazione.prenotazioneStato}</td>
                    </tr>
                  ))
                ) : (
                  <div>caricamento</div>
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
