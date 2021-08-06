import trainingServices from '../../../services/training';
import './timedisplay.scss';


const TimeDisplay = ({time, text}) => {
  
  const formatedTime = trainingServices.formatSeconds(time);
  
  return(
  <div className="readtraining__timedisplay">
    <div className="readtraining__timedisplay__text">
      {text}
    </div>
    <div className="readtraining__timedisplay__time">
      {formatedTime}
    </div>
    
  </div>
)}

export default TimeDisplay;