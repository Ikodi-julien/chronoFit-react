import {NavLink} from 'react-router-dom';
import {useLocation} from 'react-router-dom'
import PropTypes from 'prop-types';

import './appnav.scss';

const AppNav = ({toggleMenu, menuIsVisible}) => {
  
  const location = useLocation();
  
  return(
    <section className="appnav__container">
      <div className="appnav__title">
        {
          location.pathname === "/custom_training" ?
            "Custom Training" : 
          location.pathname === "/girls" ?
            "Les Girls" :
            "Titre pas prévu..."
        }
      </div>
      <button 
        className="appnav__toggle training__button --transparent --icone --xl"
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
        <NavLink to="/girls" className="appnav__links__link" onClick={() => toggleMenu()} >Les Girls</NavLink>
        <NavLink to="/custom_training" className="appnav__links__link" onClick={() => toggleMenu()} >Custom Trainings</NavLink>
        {/* <NavLink to="/connexion" className="appnav__links__link" onClick={() => toggleMenu()} >Connexion</NavLink> */}
      </ul>
      
    </section>
  )
}

AppNav.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuIsVisible: PropTypes.bool.isRequired
}
export default AppNav;