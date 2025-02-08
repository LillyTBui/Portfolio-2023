import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 30) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className={color ? "header header__bg" : "header"}>
      <div className="navbar_custom__div">
        <AnchorLink
          href="#home"
          className={
            color ? "navbar_custom__logo header__text" : "navbar_custom__logo "
          }
        >
          Lilly Thi Bui
        </AnchorLink>
        <input
          id="toggle"
          type="checkbox"
          checked={toggle}
          onChange={handleToggle}
        />
        <label htmlFor="toggle" className="hamburger">
          <div
            className={
              color
                ? "hamburger__div hamburger_top hamburger__color"
                : "hamburger__div hamburger_top"
            }
          ></div>
          <div
            className={
              color
                ? "hamburger__div hamburger_bottom hamburger__color"
                : "hamburger__div hamburger_bottom"
            }
          ></div>
        </label>
        <div className="navbar_wrapper">
          <nav className="navbar_custom">
            <AnchorLink
              href="#projects"
              className={color ? "navbar_link header__text" : "navbar_link "}
              onClick={handleToggle}
            >
              Prosjekter
            </AnchorLink>
            <AnchorLink
              href="#contact"
              className={color ? "navbar_link header__text" : "navbar_link "}
              onClick={handleToggle}
            >
              Kontakt
            </AnchorLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
