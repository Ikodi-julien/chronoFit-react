import { useEffect } from 'react';

import trainingServices from '../../../services/training';
import './timedisplay.scss';

const Chrono = ({time, text, isCounting, setTime}) => {
  
  useEffect(() => {
    
    if (isCounting){
      if (time > 0.1) {
        setTimeout(() => {setTime(time + .1)}, 100 )
      }
    } 
    
  }, [time, isCounting, setTime])
  
  return(
  <div className="readtraining__timedisplay">
    {text !== "" && <div className="readtraining__timedisplay__text">
      {text}
    </div>}
    
    <div className="readtraining__timedisplay__time">
      {trainingServices.formatChrono(time)}
    </div>
    
  </div>
)}

export default Chrono;