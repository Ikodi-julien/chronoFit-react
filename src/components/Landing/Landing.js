import React from 'react';
import {Link} from 'react-router-dom';

import './landing.scss';

const Landing = (props) => (
  <section className="landing__container">
    <h1 className="landing__title">CHRONOFIT</h1>
    <Link 
      className="landing__button"
      to="training"
    >
      Training
    </Link>
  </section>
)

export default Landing;