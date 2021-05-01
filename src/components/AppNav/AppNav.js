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
        ><i className="fas fa-ellipsis-v"></i></button>
      
      <ul className={menuIsVisible ? "appnav__links --visible" : "appnav__links"}>
        <button 
          className="appnav__links__close"
          onClick={() => toggleMenu()}
          >
          <i className="fas fa-times"></i>
        </button>
        <NavLink to="/" className="appnav__links__link">Accueil</NavLink>
        <NavLink to="/training" className="appnav__links__link">Trainings</NavLink>
        <NavLink to="/connexion" className="appnav__links__link">Connexion</NavLink>
      </ul>
      
    </section>
  )
}

AppNav.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuIsVisible: PropTypes.bool.isRequired
}
export default AppNav;