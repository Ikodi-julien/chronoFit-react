import { useEffect } from 'react';

import trainingServices from '../../../services/training';
import './timedisplay.scss';

const Chrono = ({time, text, isCounting, isChrono, setChronoTime, setCurrentExo, currentExoIndex }) => {
  
  useEffect(() => {
    if (isCounting && isChrono){

      setTimeout(() => {setChronoTime(time + .1)}, 100 )
    }
  }, [time, isCounting, isChrono, setChronoTime])
  
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
      onClick={() => {
        setCurrentExo(currentExoIndex + 1)
      }}
    >OK SUIVANT !</button>
  </div>
)}

export default Chrono;