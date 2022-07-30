import NavDrawer from "./NavDrawer";
import { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

const NavBar = () => {
  const navMenuLinks = ["Projects", "About", "Contact"];
  const [isOpen, setOpen] = useState(false);
  const mql = window.matchMedia("(min-width: 768px)");

  if (isOpen) {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
  } else {
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  }

  useEffect(() => {
    try {
      mql.addEventListener("change", () => setOpen(false));
    } catch (e1) {
      try {
        mql.addListener(() => setOpen(false));
      } catch (e2) {
        console.error(e2);
      }
    }
  }, [mql]);

  return (
    <header>
      <nav>
        <ul className="nav-items">
          <div className="nav-left">
            <span className="nav-logo">
              <a href="#hero">A</a>
            </span>
          </div>
          <div className="nav-right">
            {navMenuLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </div>
          <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
        </ul>
      </nav>
      <NavDrawer isOpen={isOpen} setOpen={setOpen} />
    </header>
  );
};

export default NavBar;
