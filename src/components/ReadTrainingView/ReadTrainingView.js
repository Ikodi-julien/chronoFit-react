import { useHistory } from 'react-router-dom';
import TrainingDetails from './TrainingDetails/TrainingDetails';
import ExoDetailsContainer from '../../containers/ExoDetailsContainer';
import ExoPlaying from './ExoPlaying/ExoPlaying';
import ReadControl from './ReadControl/ReadControl';
import CountDown from './TimeDisplay/CountDown';
import Chrono from './TimeDisplay/Chrono';
import GlobalCountDown from './TimeDisplay/GlobalCountDown';
import EndSound from './SoundManager/EndSound';
import EndTrainingModal from './EndTrainingModal/EndTrainingModal';

import './readtraining.scss';
import GlobalChrono from './TimeDisplay/GlobalChrono';

const ReadTrainingView = ({
  // state
  timelineLength,
  timelineIndex,
  trainingDetails, 
  exoPlaying, 
  globalCountdown, 
  globalChrono,
  chronoTime,
  countdownTime,
  exoTotalTime,
  timecap,
  isChrono,
  isTimecap,
  isTransition,
  isFinished,
  viewOrigin,
  
  //dispatch
  setCurrentExo, 
  startTraining,
  pauseTraining,
  stopTraining,
  endTraining,
  resetTraining,
  setCountdownTime,
  setChronoTime,
  setGlobalCountdownTime,
  setGlobalChronoTime,
  resetReadTraining,
  tellNextExoName,
  setIsTransition,
  resetAll,
}) => {
  let history = useHistory();
  
  if (timelineLength < 5) {
    history.push(viewOrigin)
    return null;
  }
  
  return (  
  <section className="readtraining">
    <EndSound finished={isFinished} />
    {isFinished && <EndTrainingModal
      trainingDuration={globalChrono.currentTime}
      trainingName={trainingDetails.name}
      actionToDispatch={resetAll}
      viewOrigin={viewOrigin}
    />}
    <button 
      className="readtraining__close training__button --xl"
      onClick={() => {
        history.push(viewOrigin);
        resetAll();
        }
      }
    ><i className="fas fa-times"></i>
    </button>
    
    <TrainingDetails details={trainingDetails}/>
    
    <div className="readtraining__row">
        <ExoDetailsContainer/>
        <ExoPlaying
          exoPlaying={exoPlaying}
          isCountdown={!isChrono}
          countdownTime={countdownTime}
          isTransition={isTransition}
          setIsTransition={setIsTransition}
        />
    </div>
    
    <div className="readtraining__exotime">
      {
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
              totalTime={exoTotalTime}
              time={countdownTime} 
              isCounting={exoPlaying.isCounting}
              setCountdownTime={setCountdownTime}
              timelineIndex={timelineIndex}
              setExo={setCurrentExo}
              tellNextExoName={tellNextExoName}
            />
      }
    </div>

    <ReadControl 
      setCurrentExo={setCurrentExo} 
      currentExoIndex={timelineIndex}
      startChrono={startTraining}
      pauseChrono={pauseTraining}
    />
    
    <div className="readtraining__row">
      <div className="readtraining__trainingtime">
        <GlobalChrono
          text="Total"
          timelineIndex={timelineIndex}
          time={globalChrono.currentTime}
          isCounting={globalChrono.isCounting}
          setTime={setGlobalChronoTime}
          resetTraining={resetTraining}
        />
        {
          isTimecap > 0 &&
          <GlobalCountDown
            text="Time Cap"
            timecap={timecap}
            time={globalCountdown.currentTime}
            timelineIndex={timelineIndex}
            isCounting={globalCountdown.isCounting}
            setTime={setGlobalCountdownTime}
            endTraining={endTraining}
            stopTraining={stopTraining}
          />
        }
      </div>
    </div>
  </section>
)}

export default ReadTrainingView;