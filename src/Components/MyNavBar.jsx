import { useState } from "react";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <nav style={{ height: "50px" }}>
        <Link to={"/"}>
          <div className="text-white fs-6">
            logo
            {/* <img
            style={{ width: "50px" }}
            src="https://pbs.twimg.com/profile_images/1373938004121772033/KTR6AKRf_400x400.jpg"
            alt=""
          /> */}
          </div>
        </Link>
        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li>
              <div className="active">About Us</div>
            </li>
            <li>
              <div>News</div>
            </li>
            <li>
              <div>Member</div>
            </li>
            <li>
              <div>Servizi</div>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? "fa-solid fa-xmark" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
};

export default MyNavbar;
