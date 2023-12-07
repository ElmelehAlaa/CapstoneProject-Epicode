import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginProfile } from "../redux/actions";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    const body = {
      password: password,
      email: email,
    };

    try {
      await dispatch(LoginProfile(body));

      navigation("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="form-container mt-5">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br />

          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <br />

          <button type="submit" className="mb-3">
            Accedi
          </button>
          <br />
          <Link to={"/register"}>Registrati</Link>
        </form>
      </div>
    </>
  );
};
export default Login;
