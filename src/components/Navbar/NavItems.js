import { Squash as Hamburger } from "hamburger-react";

const NavItems = () => {
  return (
    <ul className="nav-items">
      <div className="nav-left">
        <a href="#hero">
          <span className="nav-logo">A</span>
        </a>
      </div>
      <div className="nav-right">
        <a href="#projects">
          <li className="nav-item">Projects</li>
        </a>
        <a href="#about">
          <li className="nav-item">About</li>
        </a>
        <a href="#contact">
          <li className="nav-item">Contact</li>
        </a>
        <Hamburger color="#fff" />
      </div>
    </ul>
  );
};

export default NavItems;
