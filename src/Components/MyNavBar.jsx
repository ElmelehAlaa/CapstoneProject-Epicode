import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const [clicked, setClicked] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };
  const myData = useSelector((state) => state.profile.myContent);
  // const scrollIntoView = (sectionId) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <>
      <nav style={{ height: "50px" }}>
        <Link to={"/"}>
          <div className="text-white fs-6">
            {
              <img
                style={{ width: "50px" }}
                src="https://1000logos.net/wp-content/uploads/2021/04/Fnatic-logo.png"
                alt=""
              />
            }
          </div>
        </Link>
        {myData ? (
          <>
            <div>
              <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
                <li>
                  <Link to={""}>
                    <div className="active">Home</div>
                  </Link>
                </li>
                <li>
                  <div>News</div>
                </li>
                <li>
                  <div>Membri</div>
                </li>
                <li>
                  <Link to={"/servizi"}>
                    <div>Servizi</div>
                  </Link>
                </li>
                <li className="ms-5">
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
                        <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* <div style={{ backgroundColor: "orange" }} id="profileDropdown1" className="dropdown-content">
                        <Link to={"/myprofile"}>
                          {" "}
                          <div style={{ fontSize: "15px" }}>Visualizza profilo</div>
                        </Link>
                      </div>
                      <div style={{ backgroundColor: "orange" }} id="profileDropdown2" className="dropdown-content">
                        <div style={{ fontSize: "15px" }}>logout</div>
                      </div> */}
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
              <div>Login</div>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default MyNavbar;
