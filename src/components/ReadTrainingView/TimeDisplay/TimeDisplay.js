import trainingServices from '../../../services/training';
import './timedisplay.scss';

const TimeDisplay = ({time, text}) => {
  
  return(
  <div className="readtraining__timedisplay">
    <div className="readtraining__timedisplay__text">
      {text}
    </div>
    <div className="readtraining__timedisplay__time">
      {trainingServices.formatSeconds(time)}
    </div>
    
  </div>
)}

export default TimeDisplay;