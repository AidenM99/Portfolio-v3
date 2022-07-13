import { Squash as Hamburger } from "hamburger-react";

const NavItems = () => {
  return (
    <ul className="nav-items">
      <div className="nav-left">
        <span className="nav-logo">A</span>
      </div>
      <div className="nav-right">
        <li className="nav-item">Projects</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
        <Hamburger color="#fff" />
      </div>
    </ul>
  );
};

export default NavItems;
