import { useEffect } from 'react';

import trainingServices from '../../../services/training';
import './timedisplay.scss';

const Chrono = ({text, time, isCounting, setChronoTime, setExo, timelineIndex }) => {
  
  useEffect(() => {
    if (isCounting ){

      setTimeout(() => {setChronoTime(time + .1)}, 100 )
    }
  }, [time, isCounting, setChronoTime])
  
  return(
  <div className="readtraining__timedisplay">
    {text !== "" && <div className="readtraining__timedisplay__text">
      {text}
    </div>}
    
    <div className="readtraining__timedisplay__time">
      {trainingServices.formatChrono(time)}
    </div>
    <button 
      className="training__button"
      onClick={() => setExo(timelineIndex + 1)}
    >
      FINI, SUIVANT !
    </button>
  </div>
)}

export default Chrono;