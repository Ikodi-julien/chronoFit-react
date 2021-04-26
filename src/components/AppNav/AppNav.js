import {NavLink} from 'react-router-dom';
import './appnav.scss';

const AppNav = (props) => {
  
  return(
    <section className="appnav__container">
      <div className="appnav__logo">CHRONOFIT</div>
      <div className="appnav__toggle"><i class="fas fa-ellipsis-v"></i></div>
      
      <ul className="appnav__links">
        <NavLink to="/" className="appnav__links__link">Accueil</NavLink>
        <NavLink to="/training" className="appnav__links__link">Trainings</NavLink>
        <NavLink to="/connexion" className="appnav__links__link">Connexion</NavLink>
      </ul>
    </section>
  )
}

export default AppNav;