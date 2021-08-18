import './wodcard.scss';

const WodCard = () => {
  
  return (
    <article className="training__apilist__wodcard">
      <h1 className="training__apilist__wodcard__title">
        Le titre du WOD
      </h1>
      <h2 className="training__apilist__wodcard__subtitle">
        AMRAP - Le type et quelques infos
      </h2>
      <ul className="training__apilist__wodcard__exolist">
        <li className="training__apilist__wodcard__exo">
          400m de course
        </li>
        <li className="training__apilist__wodcard__exo">
          Pull-ups (unbroken max)
        </li>
      </ul>
      <p className="training__apilist__wodcard__desc">
        Ici la description du WOD, en général 3 à 4 lignes sont écrites afin de décrire les particularités du WOD. Par exemple si les séries doivent être unbroken ou pas...
      </p>
      
      <div className="training__apilist__wodcard__row">
        <button className="training__button" onClick={() => {console.log("Coucou Lénaëlle")}}>
          Débutant
        </button>
        <button className="training__button">
          Intermédiaire
        </button>
        <button className="training__button">
          Avancé
        </button>
        <button className="training__button">
          Expert
        </button>
      </div>
    </article>
  )
}
export default WodCard;