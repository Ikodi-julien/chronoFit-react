import {NavLink} from 'react-router-dom';
import TrainingDetails from './TrainingDetails/TrainingDetails';
import ExoDetails from './ExoDetails/ExoDetails';
import ExoPlaying from './ExoPlaying/ExoPlaying';
import ReadControl from './ReadControl/ReadControl';
import CountDown from './TimeDisplay/CountDown';
import Chrono from './TimeDisplay/Chrono';
import GlobalCountDown from './TimeDisplay/GlobalCountDown';

import './readtraining.scss';
import GlobalChrono from './TimeDisplay/GlobalChrono';

const ReadTrainingView = ({
  // state
  timelineIndex,
  trainingDetails, 
  nextExo, 
  exoPlaying, 
  globalCountdown, 
  globalChrono,
  chronoTime,
  countdownTime,
  isChrono,
  isTimecap,
  
  //dispatch
  setCurrentExo, 
  startTraining,
  pauseTraining,
  stopTraining,
  resetTraining,
  setCountdownTime,
  setChronoTime,
  setGlobalCountdownTime,
  setGlobalChronoTime,
  resetReadTraining,
  tellNextExoName,
}) => (
  
  <section className="readtraining">
    <NavLink 
      to="custom_training" 
      className="readtraining__close training__button --transparent --xl"
      onClick={() => {
        resetReadTraining();
        }
      }
    >
    <i className="fas fa-times-circle"></i>
    </NavLink>
    <TrainingDetails details={trainingDetails}/>
    <div className="readtraining__row">
      <ExoDetails exo={nextExo}/>
    </div>
    <div className="readtraining__row">
      <ExoPlaying 
        exoPlaying={exoPlaying} 
        isCountdown={!isChrono} 
        countdownTime={countdownTime}
      />
    </div>
    
    <div className="readtraining__exotime">
      {
        !exoPlaying.end ?
          isChrono ? 
            <Chrono
              text="" 
              time={chronoTime} 
              isCounting={exoPlaying.isCounting}
              setChronoTime={setChronoTime}
              setExo={setCurrentExo} 
              timelineIndex={timelineIndex}
            />
          :
            <CountDown 
              text="" 
              time={countdownTime} 
              isCounting={exoPlaying.isCounting}
              setCountdownTime={setCountdownTime}
              timelineIndex={timelineIndex}
              setExo={setCurrentExo}
              tellNextExoName={tellNextExoName}
            />
        : null
      }
      
    </div>

    <ReadControl 
      setCurrentExo={setCurrentExo} 
      currentExoIndex={timelineIndex}
      startChrono={startTraining}
      pauseChrono={pauseTraining}
    />
    
    <div className="readtraining__trainingtime">
      <GlobalChrono
        text="Temps passé :" 
        time={globalChrono.currentTime} 
        isCounting={globalChrono.isCounting}
        setTime={setGlobalChronoTime}
        resetTraining={resetTraining}
      />
    </div>
    <div className="readtraining__trainingtime">
      {
        isTimecap > 0 && 
        <GlobalCountDown 
          text="Temps restant du Time Cap :" 
          time={globalCountdown.currentTime} 
          isCounting={globalCountdown.isCounting}
          setTime={setGlobalCountdownTime}
          stopTraining={stopTraining}
        />
      }
    </div>
    
  </section>
)

export default ReadTrainingView;