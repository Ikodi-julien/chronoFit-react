import { useEffect } from 'react';

import trainingServices from '../../../services/training';
import './timedisplay.scss';

const GlobalCountDown = ({time, text, isCounting, setTime,   stopTraining,
}) => {
  
  useEffect(() => {
    
    if (isCounting){
      if (time > 0.1) {
        setTimeout(() => {setTime(time - .1)}, 100 );
        return
      } 

      stopTraining();
      // Make sure to endup with 00:00:0
      setTimeout(() => setTime(0), 110);
    } 
  }, [time, isCounting, setTime, stopTraining,
  ])
  
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

export default GlobalCountDown;