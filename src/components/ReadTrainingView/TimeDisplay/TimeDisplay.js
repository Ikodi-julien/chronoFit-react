import { useEffect, useRef } from 'react';

import trainingServices from '../../../services/training';
import './timedisplay.scss';

const TimeDisplay = ({time, text, isCounting, setTime}) => {
  
  let timeToDisplay = useRef(trainingServices.formatChrono(time));
  
  useEffect(() => {
    if (isCounting && time > 0.1) {
      timeToDisplay.current = trainingServices.formatChrono(time - .1);
      setTimeout(() => {setTime(time - .1)}, 100 )
    }
  }, [time, setTime, isCounting])
  
  return(
  <div className="readtraining__timedisplay">
    {text !== "" && <div className="readtraining__timedisplay__text">
      {text}
    </div>}
    
    <div className="readtraining__timedisplay__time">
      {timeToDisplay.current}
    </div>
    
  </div>
)}

export default TimeDisplay;