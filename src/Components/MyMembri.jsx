import { useSelector } from "react-redux";
import myImage from "../Assets/background2.jpg";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useState } from "react";

const MyMembri = () => {
  const backgroundImages = [
    "https://cdn2.steamgriddb.com/hero/a25e0e62a4702353f399953579424997.jpg",
    "https://tsm.gg/wp-content/uploads/2022/03/Apex.png",
    "https://www.hdwallpapers.in/download/octane_green_background_hd_apex_legends-HD.jpg",
  ];

  let currentBackgroundIndex = 0;

  const getNextBackgroundImage = () => {
    const backgroundImage = backgroundImages[currentBackgroundIndex];
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
    return backgroundImage;
  };

  const [fotoSelezionata, setFotoSelezionata] = useState("");
  const [playerSelezionato, setPlayerSelezionato] = useState("");

  const membersFetched = useSelector((state) => state.members.content);

  const getIconUrl = (input) => {
    if (input === "CONTROLLER") {
      return "https://cdn.vectorstock.com/i/preview-1x/69/38/game-controller-vector-36606938.jpg";
    } else if (input === "MK") {
      return "https://i.pinimg.com/736x/2b/14/fe/2b14fedeef482b00ca5b53bca9f21e19.jpg";
    }
    return "https://banner2.cleanpng.com/20180715/yag/kisspng-question-mark-computer-icons-exclamation-mark-desk-question-mark-emoji-5b4bb794264216.8330599815316888521567.jpg";
  };

  const handleColClick = (membroSingolo) => {
    setFotoSelezionata(membroSingolo.urlAvatar);
    setPlayerSelezionato(membroSingolo);
  };

  return (
    <>
      <Container fluid style={{ backgroundImage: `url(${myImage})`, height: "100%", backgroundSize: "cover" }}>
        <Row className="justify-content-center" style={{ position: "relative" }}>
          <h3 className="text-center fs-1 my-4 text-white" style={{ fontWeight: "700" }}>
            I Nostri Talent
          </h3>
          <Col xs={6} className="selezionaUnMembro">
            {membersFetched.length !== 0 ? (
              membersFetched.map((membroSingolo) => (
                <Col
                  onClick={() => handleColClick(membroSingolo, getNextBackgroundImage())}
                  xs={12}
                  key={membroSingolo.id}
                  style={{
                    backgroundImage: `url("${getNextBackgroundImage()}")`,
                    backgroundSize: "cover",
                    border: "solid",
                    textAlign: "start",
                    marginBottom: "15px", // Aggiungi margine per lo spaziamento tra gli elementi
                  }}
                >
                  <div style={{ display: "inline-block" }}>
                    <div style={{ marginLeft: "10px" }}>
                      <img
                        style={{ border: "solid 1px", borderColor: "orange" }}
                        width={"35px"}
                        src={getIconUrl(membroSingolo.input)}
                        alt=""
                      />
                    </div>
                    <div>
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div style={{ display: "inline-block" }}>
                    <Image
                      width={"150px"}
                      height={"150px"}
                      style={{ objectFit: "contain" }}
                      src={membroSingolo.urlAvatar}
                      roundedCircle
                    />
                  </div>
                  <div className="d-inline-block" style={{ verticalAlign: "middle", color: "white" }}>
                    <h4 style={{ color: "white", fontWeight: 700 }}>"{membroSingolo.username}"</h4>
                  </div>
                </Col>
              ))
            ) : (
              <div>caricamento...</div>
            )}
          </Col>
          <Col xs={6} className="sticky-right-column">
            {fotoSelezionata && playerSelezionato ? (
              <div
                style={{
                  position: "sticky",
                  top: 0,
                  height: "100vh",
                  border: "solid",
                  padding: "0",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    backgroundImage: `url(https://www.tuttotek.it/wp-content/uploads/2019/02/BLOODHOUND.jpg)`,
                    backgroundSize: "cover",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                >
                  <div className="pMembroSelezionato" style={{ paddingTop: "25%", marginRight: "20px" }}>
                    <h3>"{playerSelezionato.username}"</h3>
                    <h4>Nome: {playerSelezionato.nome}</h4>
                    <h4>Cognome: {playerSelezionato.cognome}</h4>
                    <h4>Input: {playerSelezionato.input}</h4>
                    <h4>Player con grandissime abilità meccaniche</h4>
                  </div>
                  <img
                    className="membroSelezionato"
                    src={fotoSelezionata}
                    alt="foto-selezionata"
                    style={{ marginLeft: "20px" }}
                  />
                </div>
              </div>
            ) : (
              <h4>Seleziona un talento</h4>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyMembri;
