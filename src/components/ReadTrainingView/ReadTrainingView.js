import { useHistory } from "react-router-dom";
import TrainingDetails from "./TrainingDetails/TrainingDetails";
import ExoDetailsContainer from "../../containers/ExoDetailsContainer";
import ExoPlaying from "./ExoPlaying/ExoPlaying";
import ReadControl from "./ReadControl/ReadControl";
import ChronoContainer from "../../containers/ChronoContainer";
import GlobalChronoContainer from "../../containers/GlobalChronoContainer";
import CountdownContainer from "../../containers/CountdownContainer";
import GlobalCountdownContainer from "../../containers/GlobalCountdownContainer";
import EndSound from "./SoundManager/EndSound";
import EndTrainingModalContainer from "../../containers/EndTrainingModalContainer";
import VoiceManagerContainer from "../../containers/VoiceManagerContainer";

import "./readtraining.scss";

const ReadTrainingView = ({
  // state
  timelineLength,
  timelineIndex,
  trainingDetails,
  exoPlaying,
  globalChrono,
  countdownTime,
  isChrono,
  isTimecap,
  isTransition,
  isFinished,
  viewOrigin,

  //dispatch
  setCurrentExo,
  startTraining,
  pauseTraining,
  setIsTransition,
  resetAll,
}) => {
  let history = useHistory();

  if (timelineLength < 5) {
    history.push(viewOrigin);
    return null;
  }

  return (
    <section className="readtraining">
      <EndSound finished={isFinished} />
      {isFinished && (
        <EndTrainingModalContainer
          actionToDispatch={resetAll}
          viewOrigin={viewOrigin}
        />
      )}
      <button
        className="readtraining__close training__button --xl"
        onClick={() => {
          history.push(viewOrigin);
          resetAll();
        }}
      >
        <i className="fas fa-times"></i>
      </button>

      <TrainingDetails details={trainingDetails} />

      <div className="readtraining__row">
        <ExoDetailsContainer />
        <ExoPlaying
          exoPlaying={exoPlaying}
          isCountdown={!isChrono}
          countdownTime={countdownTime}
          isTransition={isTransition}
          setIsTransition={setIsTransition}
        />
      </div>

      <div className="readtraining__exotime">
        <VoiceManagerContainer />
        {isChrono ? (
          <ChronoContainer text="" />
        ) : (
          <CountdownContainer text="" />
        )}
      </div>

      <ReadControl
        setCurrentExo={setCurrentExo}
        currentExoIndex={timelineIndex}
        startChrono={startTraining}
        pauseChrono={pauseTraining}
      />

      <div className="readtraining__row">
        <div className="readtraining__trainingtime">
          <GlobalChronoContainer text="Total" />
          {isTimecap > 0 && <GlobalCountdownContainer text="Time Cap" />}
        </div>
      </div>
    </section>
  );
};

export default ReadTrainingView;
