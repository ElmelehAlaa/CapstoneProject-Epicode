import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGOUT } from "../redux/actions";
import myImage from "../Assets/logo.png";

const MyNavbar = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };
  const myData = useSelector((state) => state.profile.myContent);
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT, payload: myData });
  };

  return (
    <>
      <nav style={{ height: "50px" }}>
        <div className="text-white fs-6">
          {" "}
          <Link to={"/"}>{<img style={{ width: "70px" }} src={myImage} alt="" />} </Link>
        </div>

        {myData ? (
          <>
            <div>
              <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
                <li>
                  <Link to={""}>
                    <div className="active">Home</div>
                  </Link>
                </li>
                {/* <li>
                  <div>News</div>
                </li> */}
                <li>
                  <Link to={"/membri"}>
                    <div>Membri</div>
                  </Link>
                </li>
                <li>
                  <Link to={"/servizi"}>
                    <div>Servizi</div>
                  </Link>
                </li>
                <li>
                  <>
                    <Dropdown>
                      <Dropdown.Toggle id="dropdownNavbar">
                        <img
                          onClick={handleProfileClick}
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                          }}
                          src={myData.urlAvatar}
                          alt="Profile"
                        />
                      </Dropdown.Toggle>

                      <Dropdown.Menu
                        style={{ backgroundColor: "orange" }}
                        id="profileDropdown1"
                        className="dropdown-content"
                      >
                        <Link to={"/myprofile"}>
                          {" "}
                          <Dropdown.Item href="#/action-1">Modifica profilo</Dropdown.Item>
                        </Link>
                        <Link to={"/mie-prenotazioni"}>
                          <Dropdown.Item href="#/action-3">Mie prenotazioni</Dropdown.Item>
                        </Link>
                        <Link to={"/login"}>
                          <Dropdown.Item href="#/action-2" onClick={handleLogout}>
                            Logout
                          </Dropdown.Item>
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                </li>
              </ul>
            </div>
            <div id="mobile" onClick={handleClick}>
              <i id="bar" className={clicked ? "fa-solid fa-xmark" : "fas fa-bars"}></i>
            </div>
          </>
        ) : (
          <div>
            <Link to="/login">
              <div className="text-white">Login</div>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default MyNavbar;
