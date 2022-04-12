import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

import "./appnav.scss";

const AppNav = () => {
  const location = useLocation();
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);

  return (
    <section className="appnav__container">
      <div className="appnav__title">
        {location.pathname === "/custom_training"
          ? "Custom Training"
          : location.pathname === "/girls"
          ? "Les Girls"
          : "Titre pas prévu..."}
      </div>
      <button
        className="appnav__toggle training__button --transparent --icone --xl"
        onClick={() => setNavMenuIsOpen(!navMenuIsOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>

      <ul
        className={navMenuIsOpen ? "appnav__links --visible" : "appnav__links"}
      >
        <button
          className="appnav__links__close"
          onClick={() => setNavMenuIsOpen(!navMenuIsOpen)}
        >
          <i className="fas fa-times"></i>
        </button>
        <NavLink
          to="/"
          className="appnav__links__link"
          onClick={() => setNavMenuIsOpen(false)}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/girls"
          className="appnav__links__link"
          onClick={() => setNavMenuIsOpen(false)}
        >
          Les Girls
        </NavLink>
        <NavLink
          to="/custom_training"
          className="appnav__links__link"
          onClick={() => setNavMenuIsOpen(false)}
        >
          Custom Trainings
        </NavLink>
        {/* <NavLink to="/connexion" className="appnav__links__link" onClick={() => toggleMenu()} >Connexion</NavLink> */}
      </ul>
    </section>
  );
};

export default AppNav;
