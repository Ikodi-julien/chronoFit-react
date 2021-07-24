import React from 'react';
import {Link} from 'react-router-dom';

import './landing.scss';

const Landing = (props) => (
  <section className="landing__container">
    <h1 className="landing__title">CHRONOFIT</h1>
    <Link 
      className="landing__button"
      to="benchmark_training"
    >
      Benchmark Trainings
    </Link>
    <Link 
      className="landing__button"
      to="custom_training"
    >
      Custom Trainings
    </Link>
  </section>
)

export default Landing;