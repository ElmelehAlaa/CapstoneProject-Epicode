import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMyProfile } from "../redux/actions";
import { Col, Container, Row } from "react-bootstrap";

const MyProfile = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const dispatch = useDispatch();

  const myData = useSelector((state) => state.profile.myContent);
  const [localData, setLocalData] = useState({ ...myData });

  const handleDataChange = (e, field) => {
    const newValue = e.target.value;
    setLocalData((prevData) => ({
      ...prevData,
      [field]: newValue,
    }));
  };

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("image", file);

        const response = await fetch(`http://localhost:3001/users/${myData.id}/image`, {
          method: "PATCH",
          body: formData,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        return response.json();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleUpdateProfile = () => {
    console.log(localData);
    console.log(myData);
    dispatch(updateMyProfile(localData, myData));
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  useEffect(() => {
    setLocalData({ ...myData });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <h1 className="mb-5">Il mio profilo</h1>
        <Col md={"6"}>
          {showSuccessMessage && (
            <div className="alert alert-success" role="alert">
              Profilo aggiornato con successo!
            </div>
          )}
          <h4 style={{ color: "orange" }}>premi per modificare la foto</h4>
          <img
            src={myData.urlAvatar}
            alt="Avatar"
            style={{ width: "300px", height: "300px", cursor: "pointer" }}
            onClick={handleImageClick}
          />
          <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleFileChange} accept="image/*" />
        </Col>
        <Col md={"6"} className="custom-column">
          {showSuccessMessage && (
            <div className="alert alert-success" role="alert">
              Profilo aggiornato con successo!
            </div>
          )}
          <div className="input-container">
            <label className="input-label">Nome utente:</label>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={localData.username}
              onChange={(e) => handleDataChange(e, "username")}
              className="input-text"
            />
          </div>
          <div className="input-container">
            <label className="input-label">Nome:</label>
            <input
              type="text"
              placeholder="nome"
              name="firstName"
              value={localData.nome}
              onChange={(e) => handleDataChange(e, "nome")}
              className="input-text"
            />
          </div>
          <div className="input-container">
            <label className="input-label">Cognome:</label>
            <input
              type="text"
              name="cognome"
              value={localData.cognome}
              onChange={(e) => handleDataChange(e, "cognome")}
              className="input-text"
            />
          </div>
          <div className="input-container">
            <label className="input-label">Email:</label>
            <input
              type="email"
              placeholder="input"
              name="email"
              value={localData.email}
              onChange={(e) => handleDataChange(e, "email")}
              className="input-text"
            />
          </div>
          <div className="input-container">
            <label className="input-label">Tipo di input:</label>
            <select
              value={localData.input}
              placeholder="input"
              name="input"
              onChange={(e) => handleDataChange(e, "input")}
              className="input-select"
            >
              <option>seleziona input</option>
              <option value="MK">MK</option>
              <option value="CONTROLLER">CONTROLLER</option>
            </select>
          </div>

          <button onClick={handleUpdateProfile}>Aggiorna Profilo</button>
        </Col>
      </Row>
    </Container>
  );
};

export default MyProfile;
