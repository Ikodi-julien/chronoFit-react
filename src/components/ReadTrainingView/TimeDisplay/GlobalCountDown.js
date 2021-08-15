import { useEffect, useRef } from 'react';

import trainingServices from '../../../services/training';
import { asyncTime } from '../../../services/asyncTime';
import './timedisplay.scss';

const GlobalCountDown = ({time, timecap, timelineIndex, text, isCounting, setTime, endTraining, stopTraining
}) => {
  let countdownPercentage = useRef(0);

  useEffect(() => {
    if (timelineIndex > 1) {
      if (isCounting && time > 0.1) {
        
                  
      (async() => {
        await asyncTime.wait100ms();
        
        if (isCounting ){
          setTime(time - .1)
          countdownPercentage.current = 100 - (time/timecap)*100;
        }
      })()
      return
    } 

    endTraining();
    // Make sure to endup with 00:00:0
    setTimeout(() => setTime(0), 110);
    }
  }, [time, timecap, timelineIndex, isCounting, setTime, endTraining,
  ])
  
  return(
  <div className="readtraining__timedisplay --small"
      style={
      {backgroundImage: `conic-gradient(white ${countdownPercentage.current}%, rgb(0, 217, 255) 0%, rgb(0, 217, 255))`}
      }
  >
    <div className="readtraining__timedisplay__container">
  
      {text !== "" && <div className="readtraining__timedisplay__text --small">
        {text}
      </div>}
    
    
      <div className="readtraining__timedisplay__time --small">
        {trainingServices.formatChrono(time)}
      </div>
      
      <button
        className="readtraining__timedisplay__button --small"
        onClick={() => stopTraining()}
      >
        Terminer
      </button>
    </div>
  </div>
)}

export default GlobalCountDown;