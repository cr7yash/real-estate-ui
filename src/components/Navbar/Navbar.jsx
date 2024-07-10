import { useState } from "react";
import "./Navbar.scss";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>Yash Estate</span>
        </a>
        <a href="/home">Home</a>
        <a href="/About">About</a>
        <a href="/Contact">Contact</a>
        <a href="/Agents">Agents</a>
      </div>
      <div className="right">
        <a href="/signin">Sign In</a>
        <a href="/signup" className="register">
          Sign Up
        </a>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="Hamburger menu"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/home">Home</a>
          <a href="/About">About</a>
          <a href="/Contact">Contact</a>
          <a href="/Agents">Agents</a>
          <a href="/signin">Sign In</a>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
