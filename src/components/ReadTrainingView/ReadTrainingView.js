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
  timelineIndex,
  trainingDetails, 
  nextExo, 
  exoPlaying, 
  globalCountdown, 
  globalChrono,
  setCurrentExo, 
  startTraining,
  pauseTraining,
  setExoPlayingTime,
  setChronoTime,
  chronoTime,
  setGlobalCountdownTime,
  setGlobalChronoTime,
  resetReadTraining,
  tellNextExoName,
  globalCountdownSkipTime,
  setGlobalCountdownSkipTime,
  isChrono,
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
      <ExoPlaying exoPlaying={exoPlaying} />
    </div>
    
    <div className="readtraining__exotime">
      {
        exoPlaying.duration === 0 && 
          <Chrono
            text="" 
            time={chronoTime} 
            isCounting={exoPlaying.isCounting}
            setChronoTime={setChronoTime}
            setCurrentExo={setCurrentExo} 
            currentExoIndex={timelineIndex}
            isChrono={isChrono}
          />
      }
      {
        exoPlaying.duration > 0 && 
          <CountDown 
            text="" 
            time={exoPlaying.currentTime} 
            isCounting={exoPlaying.isCounting}
            setTime={setExoPlayingTime}
            timelineIndex={timelineIndex}
            setExo={setCurrentExo}
            tellNextExoName={tellNextExoName}
            isCountdown={!isChrono}
          />
      }
      
    </div>

    <ReadControl 
      setCurrentExo={setCurrentExo} 
      currentExoIndex={timelineIndex}
      startChrono={startTraining}
      pauseChrono={pauseTraining}
    />
    
    <div className="readtraining__trainingtime">
      {
        exoPlaying.roundType === 'emom' && 
          <GlobalCountDown 
            text="Temps restant :" 
            time={globalCountdown.currentTime} 
            isCounting={globalCountdown.isCounting}
            setTime={setGlobalCountdownTime}
            globalCountdownSkipTime={globalCountdownSkipTime}
            setglobalCountdownSkipTime={setGlobalCountdownSkipTime}
          />
      }

      <GlobalChrono
        text="Temps passé :" 
        time={globalChrono.currentTime} 
        isCounting={globalChrono.isCounting}
        setTime={setGlobalChronoTime}
      />
    </div>
  </section>
)

export default ReadTrainingView;