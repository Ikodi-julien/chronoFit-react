import './exodetails.scss';

const ExoDetails = ({exo, modifier=""}) => {
  // console.log(exo);
  return (
  <div className={`readtraining__exodetails ${modifier}`}>
    <h1 className="readtraining__exodetails__name">
      {exo.name}
    </h1>
    <div className="readtraining__exodetails__series">
      {exo.serieCount} séries
    </div>
    <div className="readtraining__exodetails__reps">
      {exo.reps} reps / série
    </div>
    <div className="readtraining__exodetails__duration">
      Durée prévue : {exo.duration}
    </div>
    <div className="readtraining__exodetails__weight">
      Poids : {exo.weight}kg
    </div>
  </div>
)}

export default ExoDetails;