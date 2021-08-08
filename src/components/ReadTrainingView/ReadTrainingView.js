import {NavLink} from 'react-router-dom';
import TrainingDetails from './TrainingDetails/TrainingDetails';
import ExoDetails from './ExoDetails/ExoDetails';
import ExoPlaying from './ExoPlaying/ExoPlaying';
import ReadControl from './ReadControl/ReadControl';
import CountDown from './TimeDisplay/CountDown';
import BipManager from './BipManager/BipManager';

import './readtraining.scss';

const ReadTrainingView = ({
  timelineIndex,
  trainingDetails, 
  nextExo, 
  previousExo, 
  exoPlaying, 
  globalTime, 
  setCurrentExo, 
  startChrono,
  pauseChrono,
  setExoPlayingTime,
  setGlobalTime,
  resetReadTraining,
  tellNextExoName,
}) => (
  
  <section className="readtraining">
    <NavLink 
      to="custom_training" 
      className="readtraining__close training__button --transparent --xl"
      onClick={() => resetReadTraining()}
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
    
    {/* ExoPlaying */}
    <div className="readtraining__exotime">
      <CountDown 
        text="" 
        time={exoPlaying.currentTime} 
        isCounting={exoPlaying.isCounting}
        setTime={setExoPlayingTime}
        timelineIndex={timelineIndex}
        setExo={setCurrentExo}
        tellNextExoName={tellNextExoName}
      />
    </div>

    <ReadControl 
      setCurrentExo={setCurrentExo} 
      currentExoIndex={timelineIndex}
      startChrono={startChrono}
      pauseChrono={pauseChrono}
    />
    
    <div className="readtraining__trainingtime">
      <CountDown 
        text="Temps total restant :" 
        time={globalTime.currentTime} 
        isCounting={globalTime.isCounting}
        setTime={setGlobalTime}
        timelineIndex={timelineIndex}
        setExo={setCurrentExo}
      />
    </div>
    <BipManager time={exoPlaying.currentTime} />
  </section>
)

export default ReadTrainingView;