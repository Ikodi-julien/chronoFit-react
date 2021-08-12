import './exodetails.scss';
import trainingServices from '../../../services/training';

const ExoDetails = ({exo, modifier=""}) => {
  // console.log(exo);
  return (
  <div className={`readtraining__exodetails ${modifier}`}>
    <h1 className="readtraining__exodetails__title">
      Exo suivant
    </h1>
    {
      exo.name && <h2 className="readtraining__exodetails__name">
        {exo.name}
      </h2>
    }
    {
      exo.serieCount !== 0 && (<div className="readtraining__exodetails__series">
        {exo.serieCount} séries
      </div>)
    }
    {
      exo.reps !== 0 && (<div className="readtraining__exodetails__reps">
        {exo.reps} reps / série
      </div>)
    }
    {
      exo.duration !== 0 && (<div className="readtraining__exodetails__duration">
        Durée : {trainingServices.formatSeconds(exo.duration)}
      </div>)
    }
    {
      exo.weight !== 0 && (<div className="readtraining__exodetails__weight">
        Poids : {exo.weight}kg
      </div>)
    }
  </div>
)}

export default ExoDetails;