import './footer.scss';
import logoIkodi from '../../assets/logo_ikodi_carre.png'

const Footer = () => (
  <section className="footer">
    <div className="footer__logo">
      <a href="http://ikodi.eu">
        <img src={logoIkodi} className="footer__logo__img" alt="logo ikodi" />
      </a>
    </div>
    -
    <div className="footer__sociallinks">
      <a href="https://github.com/ikodi-julien">
        <i className="fab fa-github footer__sociallinks__link"></i>
      </a>
      <a href="https://www.linkedin.com/in/julien-pellin-934720188/">
        <i className="fab fa-linkedin footer__sociallinks__link"></i>
      </a>
    </div>
    -
    <div className="footer__contact">
      <a href="https://ikodi.eu/blog/?page_id=36">
        Contact
      </a>
    </div>
  </section>
)

export default Footer;