import { useSelector } from "react-redux";

import { Col, Container, Image, Row } from "react-bootstrap";
import { useState } from "react";

const MyMembri = () => {
  const backgroundImages = [
    "https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_apex_legends_06_2560x1080.jpg&height=506&sharpen",
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
      <Container fluid>
        <Row className="justify-content-center" style={{ position: "relative" }}>
          <h3 className="text-center fs-1 my-4 " style={{ fontWeight: "700" }}>
            I Nostri Talent
          </h3>
          <Col md={"6"} style={{ width: "25%" }}>
            {membersFetched.length !== 0 ? (
              membersFetched.map((membroSingolo) => (
                <>
                  <Col
                    onClick={() => handleColClick(membroSingolo, getNextBackgroundImage())}
                    md={"12"}
                    key={membroSingolo.id}
                    style={{
                      backgroundImage: `url("${getNextBackgroundImage()}")`,
                      backgroundSize: "cover",
                      border: "solid",
                      textAlign: "start",
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
                      <h4>{membroSingolo.nome}</h4>
                      <h4>"{membroSingolo.username}"</h4>
                      <h4>{membroSingolo.cognome}</h4>
                    </div>
                  </Col>
                </>
              ))
            ) : (
              <div> caricamento...</div>
            )}
          </Col>
          <Col
            md={6}
            style={{
              position: "relative",
              border: "solid",
              padding: "0",
            }}
          >
            {fotoSelezionata && playerSelezionato ? (
              <div
                style={{
                  position: "sticky",
                  backgroundImage: `url(https://www.tuttotek.it/wp-content/uploads/2019/02/BLOODHOUND.jpg)`,
                  backgroundSize: "cover",
                  height: "100%",
                  top: 0,
                  right: 0,
                }}
              >
                <img
                  style={{
                    width: "60%",
                    height: "auto",
                    position: "sticky",
                    right: "600px",
                    top: "50px",
                    display: "inline-block",
                  }}
                  src={fotoSelezionata}
                  alt="foto-selezionata"
                />
                <div
                  style={{
                    textAlign: "start",
                    position: "fixed",
                    color: "white",
                    display: "inline-block",
                    top: "300px",
                    right: "260px",
                  }}
                >
                  <div>
                    <h3>{playerSelezionato.username}</h3>
                    <h4>Nome : {playerSelezionato.nome}</h4>
                    <h4>Cognome : {playerSelezionato.cognome}</h4>
                    <h4>input : {playerSelezionato.input}</h4>
                    <h4>Player dalle grandissime abilita meccaniche</h4>
                  </div>
                </div>
              </div>
            ) : (
              <h4>Seleziona un talent</h4>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyMembri;
