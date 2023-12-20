import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyProfile, updateMyProfile } from "../redux/actions";
import { Col, Container, Image, Row } from "react-bootstrap";
import myImage from "../Assets/BackgroundESL.jpg";
import { FaPencilAlt } from "react-icons/fa";

const MyProfile = () => {
  const [avatarUpdated, setAvatarUpdated] = useState(false);
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
        const responseData = await response.json();
        setAvatarUpdated(true);
        console.log(avatarUpdated);
        return responseData;
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleUpdateProfile = () => {
    console.log("localdata" + localData);
    console.log(myData);
    dispatch(updateMyProfile(localData, myData));
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  useEffect(() => {
    if (avatarUpdated) {
      setLocalData({ ...myData });
      dispatch(fetchMyProfile(localData.email));
      setAvatarUpdated(false);
      console.log(avatarUpdated);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [avatarUpdated, myData]);

  return (
    <Container
      fluid
      style={{ backgroundImage: `url(${myImage})`, height: "110vh", backgroundSize: "cover", paddingTop: "25px" }}
    >
      <Row>
        <h1 className="mb-5" style={{ fontSize: "50px", fontWeight: 800 }}>
          Il mio profilo
        </h1>
        <Col md={"6"}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <Image
              src={myData.urlAvatar}
              thumbnail
              alt="avatar"
              style={{ width: "400px", height: "500px", cursor: "pointer", border: "solid" }}
              onClick={handleImageClick}
            />{" "}
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
                color: "white",
              }}
              onClick={handleImageClick}
            >
              <FaPencilAlt size={20} style={{ color: "black" }} />
            </div>
          </div>

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

          <button style={{ width: "300px", height: "75px", borderRadius: "20px" }} onClick={handleUpdateProfile}>
            Aggiorna Profilo
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default MyProfile;
