import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterProfile } from "../redux/actions";
import myImage from "../Assets/logoNome.png";
import myBackground from "../Assets/Background.jpg";

const Register = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    username: "",
    password: "",
    input: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = formData;
    console.log("Dati inviati:", formData);

    try {
      await dispatch(RegisterProfile(body));
      navigation("/login");
    } catch (error) {
      console.error("Errore durante la registrazione:", error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <Container
      fluid
      style={{ backgroundImage: `url(${myBackground})`, backgroundSize: "cover", height: "100vh" }}
      className="form-container "
    >
      <div style={{ width: "450px", marginInline: "auto" }}>
        <img src={myImage} alt="" />
      </div>
      <h2 style={{ fontSize: "45px", color: "orange", fontWeight: "700" }}>Registrati</h2>
      <form onSubmit={handleSubmit}>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        <label>
          Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Cognome:
          <input type="text" name="cognome" value={formData.cognome} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />

        <label>
          input:
          <select name="input" value={formData.ruolo} onChange={handleChange} required>
            <option value="">Seleziona il tuo input</option>
            <option value="CONTROLLER">CONTROLLER</option>
            <option value="MK">MK</option>
          </select>
        </label>
        <br />

        <button type="submit">Registrati</button>
      </form>
    </Container>
  );
};

export default Register;
