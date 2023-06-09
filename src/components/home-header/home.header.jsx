import React from "react";
import { SHeader } from "./home-header.styles";
///////////////////////////////IMAGES/////////////////////
import wakeywrite from "../../assets/wakey-project-logo.png";
import { Link } from "react-router-dom";
//////////////////////////////////////////////////////////

function Header() {
  return (
    <SHeader>
      <div className="logo-bar">
        <img src={wakeywrite} alt="" className="logo-img" />
      </div>
      <div className="options">
        <Link
          to="https://www.gepa.de/home.html"
          style={{ textDecoration: "none" }}
        >
          <span className="options-item">GEPA</span>
        </Link>
        <span className="options-item"></span>
        <Link to="/aboutus" style={{ textDecoration: "none" }}>
          <span className="options-item">ÜBER UNS</span>
        </Link>
        <Link to={"/order"}>
          <span className="options-item">BESTELLEN</span>
        </Link>
      </div>
    </SHeader>
  );
}
export default Header;
