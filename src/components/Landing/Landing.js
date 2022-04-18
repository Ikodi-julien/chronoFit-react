import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

import "./landing.scss";

const Landing = (props) => (
  <section className="landing__container">
    <h1 className="landing__title">CHRONOFIT</h1>
    <div className="landing__links">
      <Link className="landing__button" to="/girls">
        Les Girls
      </Link>
      <Link className="landing__button" to="/entrainement">
        Entrainement
      </Link>
      <Link className="landing__button" to="/recap_entrainements">
        Récap entrainements
      </Link>
    </div>
    <div className="landing__video">
      <iframe
        width="360"
        height="202"
        src="https://www.youtube.com/embed/mnzY1pf2LO0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <Footer />
  </section>
);

export default Landing;
