import { useEffect } from 'react';

import trainingServices from '../../../services/training';
import './timedisplay.scss';

const GlobalCountDown = ({time, text, isCounting, setTime, resetCurrent, setResetCurrent}) => {
  
  useEffect(() => {
    
    if (isCounting){
      if (resetCurrent) {
        // ExoPlaying changes
        setTimeout(() => {
          setResetCurrent(false);
        }, 100 );
        return
      }
      if (time > 0.1) {
        setTimeout(() => {setTime(time - .1)}, 100 );
        return
      } 
      // 
      setTime(0)
    } 
  }, [time, isCounting, setTime, resetCurrent])
  
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