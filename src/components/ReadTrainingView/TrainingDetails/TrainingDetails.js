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
      Round n°{details.roundIndex}
    </div>
    <div className="readtraining__details__duration">
      Durée du round : {duration}
    </div>
  </section>
  )}

export default TrainingDetails;