import { useEffect } from 'react';

import trainingServices from '../../../services/training';
import './timedisplay.scss';

const GlobalChrono = ({time, text, isCounting, setTime}) => {
  
  useEffect(() => {
    
      if (isCounting) {
        setTimeout(() => {setTime(time + .1)}, 100 );
        return
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

export default GlobalChrono;