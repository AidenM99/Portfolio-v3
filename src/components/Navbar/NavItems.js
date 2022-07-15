import { Squash as Hamburger } from "hamburger-react";

const NavItems = () => {
  return (
    <ul className="nav-items">
      <div className="nav-left">
        <span className="nav-logo">
          <a href="#hero">A</a>
        </span>
      </div>
      <div className="nav-right">
        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
        <Hamburger color="#fff" />
      </div>
    </ul>
  );
};

export default NavItems;
