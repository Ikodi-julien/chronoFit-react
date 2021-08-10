import './trainingdetails.scss';
import trainingServices from '../../../services/training';

const TrainingDetails = ({details}) => {
  
  const duration = trainingServices.formatSeconds(details.currentRoundDuration);
  
  return (
  <section className="readtraining__details">
    <h1 className="readtraining__details__name">
      {details.name}
    </h1>
    <div className="readtraining__details__round">
    {
      details.roundCount > 0 &&
      `Round n°${details.roundIndex || 1} / ${details.roundCount}`
    } 

    </div>
    <div className="readtraining__details__duration">
      {
        isNaN(duration) ? null : `Durée du round : ${duration}`
      }
    </div>
  </section>
  )}

export default TrainingDetails;