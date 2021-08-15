import { useEffect } from 'react';
import './exodetails.scss';
import trainingServices from '../../../services/training';

const ExoDetails = ({exo, setTransition, isTransition}) => {
  
  useEffect(() => {
    if (isTransition) {
      setTimeout(() => {
        setTransition(false);
        console.log('isTransition false')
      
      }, 300)
    }
  })
  
  return (
  <div className="readtraining__exodetails">
    <h1 className="readtraining__exodetails__title">
      Exo suivant
    </h1>
    <div className={`readtraining__exodetails__container`}>
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
  </div>
)}

export default ExoDetails;