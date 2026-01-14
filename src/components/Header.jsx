import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { useContext } from "react";
import { userContext } from "../context/userContext";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useContext(userContext);

  return (
    <header style={{ position: "sticky", top: 0, left: 0 }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 20px",
          backgroundColor: "#020618",
        }}
      >
        <div style={{ display: "inline-flex", gap: "20px" }}>
          {/* <div style = {{color:"white",backgroundColor:"#4F46E5",padding:"4px",borderRadius:"5px",fontWeight:"bolder"}}>KS</div> */}
          <h3 style={{ color: "white", fontWeight: "bolder" }}>
            {user.user_name}
          </h3>
        </div>
        <h1 style={{ color: "orange" }}>JOB PORTAL</h1>
        <ul
          className="innerNavbar"
          style={{ gap: "20px", listStyleType: "none" }}
        >
          <li>
            <Link to="/" style={{ color: "white" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/applications" style={{ color: "white" }}>
              applications
            </Link>
          </li>
          <li>
            <Link to="/profile" style={{ color: "white" }}>
              Profile
            </Link>
          </li>
        </ul>
        <div
          className="hamburger"
          style={{
            flexDirection: "column",
            gap: "6px",
            padding: "4px",
            border: "1px solid white",
            borderRadius: "5px",
          }}
          onClick={(e) => {
            setShowMenu(!showMenu);
          }}
        >
          <div
            style={{ width: "20px", height: "1px", backgroundColor: "white" }}
          ></div>
          <div
            style={{ width: "20px", height: "1px", backgroundColor: "white" }}
          ></div>
          <div
            style={{ width: "20px", height: "1px", backgroundColor: "white" }}
          ></div>
        </div>
      </nav>
      {showMenu && (
        <ul
          className="outerNavbar"
          style={{
            flexDirection: "column",
            color: "white",
            gap: "20px",
            listStyleType: "none",
            backgroundColor: "#020618",
            paddingLeft: "30px",
          }}
        >
          <li>
            <Link to="/" style={{ color: "white" }}>
              Home
            </Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/applications" style={{ color: "white" }}>
              applications
            </Link>
          </li>
          <li>
            <Link to="/profile" style={{ color: "white" }}>
              Profile
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
