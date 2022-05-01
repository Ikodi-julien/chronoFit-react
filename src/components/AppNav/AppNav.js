import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
// import PropTypes from "prop-types";

import "./appnav.scss";

const AppNav = () => {
  const location = useLocation();
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);

  return (
    <section className="appnav__container">
      <div className="appnav__title">
        {location.pathname === "/entrainement"
          ? "Entrainement"
          : location.pathname === "/girls"
          ? "Les Girls"
          : location.pathname === "/recap_entrainements"
          ? "Entrainements effectués"
          : "Titre pas prévu..."}
      </div>
      <button
        className="appnav__toggle training__button --transparent --icone --xl"
        onClick={() => setNavMenuIsOpen(!navMenuIsOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>

      <div
        className={
          navMenuIsOpen
            ? "appnav__links__container --visible"
            : "appnav__links__container"
        }
      >
        <nav className="appnav__links">
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
            to="/entrainement"
            className="appnav__links__link"
            onClick={() => setNavMenuIsOpen(false)}
          >
            Entrainements
          </NavLink>
          <NavLink
            to="/recap_entrainements"
            className="appnav__links__link"
            onClick={() => setNavMenuIsOpen(false)}
          >
            Récap entraînements
          </NavLink>
          {/* <NavLink to="/connexion" className="appnav__links__link" onClick={() => toggleMenu()} >Connexion</NavLink> */}
        </nav>
      </div>
    </section>
  );
};

export default AppNav;
