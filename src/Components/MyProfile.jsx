import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyProfile } from "../redux/actions";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    username: "NomeUtente",
    firstName: "Nome",
    lastName: "Cognome",
    avatar: "url_dell_avatar",
    inputType: "MK",
  });

  const handleDataChange = (e, field) => {
    const newValue = e.target.value;
    setUserData((prevData) => ({
      ...prevData,
      [field]: newValue,
    }));
  };
  const dispatch = useDispatch();
  const myLogin = useSelector((state) => state.login.content);

  useEffect(() => {
    dispatch(fetchMyProfile(myLogin.email));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>Il mio profilo</h1>

      <img src={userData.avatar} alt="Avatar" style={{ width: "100px", height: "100px" }} />

      <input type="text" value={userData.avatar} onChange={(e) => handleDataChange(e, "avatar")} />

      <div>
        <label>Nome utente:</label>
        <input type="text" value={userData.username} onChange={(e) => handleDataChange(e, "username")} />
      </div>
      <div>
        <label>Nome:</label>
        <input type="text" value={userData.firstName} onChange={(e) => handleDataChange(e, "firstName")} />
      </div>
      <div>
        <label>Cognome:</label>
        <input type="text" value={userData.lastName} onChange={(e) => handleDataChange(e, "lastName")} />
      </div>

      <div>
        <label>Tipo di input:</label>
        <select value={userData.inputType} onChange={(e) => handleDataChange(e, "inputType")}>
          <option value="MK">MK</option>
          <option value="CONTROLLER">CONTROLLER</option>
        </select>
      </div>
    </div>
  );
};
export default MyProfile;
