import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyNavBar from "./Components/MyNavBar";
import "bootstrap/dist/css/bootstrap.css";
import ProPlayerPage from "./Components/ProPlayerPage";
import MyServizi from "./Components/MyServizi";
import MyHome from "./Components/MyHome";
import Login from "./Components/Login";
import Register from "./Components/Register";
import MyProfile from "./Components/MyProfile";
import MyMembri from "./Components/MyMembri";
import MyOrganizzazione from "./Components/MyOrganizzazione";
import MyInvestitori from "./Components/MyInvestitori";
import TeamServizi from "./Components/TeamServizi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/membri" element={<MyMembri />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/myprofile" element={<MyProfile />}></Route>
          <Route path="" element={<MyHome />} />
          <Route path="/Servizi" element={<MyServizi />} />
          <Route path="/ProPlayer" element={<ProPlayerPage />} />
          <Route path="/Amatoriale" element={<TeamServizi />} />
          <Route path="/organizzazioni" element={<MyOrganizzazione />} />
          <Route path="/investitori" element={<MyInvestitori />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
