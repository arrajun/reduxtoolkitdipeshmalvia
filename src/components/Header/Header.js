import React from "react";
import { Link } from "react-router-dom";
import userlogo from "../../images/user.png";
import "./Header.scss";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>

      <div className="user-image">
        <img src={userlogo} alt="user"></img>
      </div>
    </div>
  );
}

export default Header;
