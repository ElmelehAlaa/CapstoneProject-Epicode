import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyNavBar from "./Components/MyNavBar";
import "bootstrap/dist/css/bootstrap.css";
import ProPlayerPage from "./Components/ProPlayerPage";
import AmatorialePage from "./Components/AmatorialePage";
import MyServizi from "./Components/MyServizi";
import MyHome from "./Components/MyHome";
import Login from "./Components/Login";
import Register from "./Components/Register";
import MyProfile from "./Components/MyProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/myprofile" element={<MyProfile />}></Route>
          <Route path="" element={<MyHome />} />
          <Route path="/Servizi" element={<MyServizi />} />
          <Route path="/ProPlayer" element={<ProPlayerPage />} />
          <Route path="/Amatoriale" element={<AmatorialePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
