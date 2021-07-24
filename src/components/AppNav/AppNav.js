import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

import './appnav.scss';

const AppNav = ({toggleMenu, menuIsVisible}) => {
  
  return(
    <section className="appnav__container">
      <div className="appnav__logo">CHRONOFIT</div>
      <button 
        className="appnav__toggle"
        onClick={() => toggleMenu()}
        ><i className="fas fa-bars"></i></button>
      
      <ul className={menuIsVisible ? "appnav__links --visible" : "appnav__links"}>
        <button 
          className="appnav__links__close"
          onClick={() => toggleMenu()}
          >
          <i className="fas fa-times"></i>
        </button>
        <NavLink to="/" className="appnav__links__link" onClick={() => toggleMenu()} >Accueil</NavLink>
        <NavLink to="/benchmark_training" className="appnav__links__link" onClick={() => toggleMenu()} >Benchmark Trainings</NavLink>
        <NavLink to="/custom_training" className="appnav__links__link" onClick={() => toggleMenu()} >Custom Trainings</NavLink>
        <NavLink to="/connexion" className="appnav__links__link" onClick={() => toggleMenu()} >Connexion</NavLink>
      </ul>
      
    </section>
  )
}

AppNav.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuIsVisible: PropTypes.bool.isRequired
}
export default AppNav;