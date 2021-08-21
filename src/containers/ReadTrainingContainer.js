import {connect} from 'react-redux';
import ReadTrainingView from '../components/ReadTrainingView/ReadTrainingView';
import { 
  setCurrentExo,
  startTraining,
  pauseTraining,
  stopTraining,
  setCountdownTime,
  setChronoTime,
  setGlobalCountdownTime,
  setGlobalChronoTime,
  resetReadTraining,
  setIsTransition,
  resetAll,
  endTraining,
} from '../actions/readTrainingActions';

const mapStateToProps = ({readTraining}) => ({
  timelineLength: readTraining.timeline.length,
  timelineIndex: readTraining.timelineIndex,
  trainingDetails: readTraining.trainingDetails,
  nextExo: readTraining.nextExo,
  exoPlaying: readTraining.exoPlaying,
  globalCountdown: readTraining.globalCountdown,
  globalChrono: readTraining.globalChrono,
  isChrono: readTraining.exoPlaying.isChrono,
  chronoTime: readTraining.chronoCurrentTime,
  countdownTime: readTraining.countdownCurrentTime,
  exoTotalTime: readTraining.exoPlaying.duration,
  isTimecap: readTraining.trainingDetails.timecap > 5 ? true : false,
  timecap: readTraining.trainingDetails.timecap,
  isTransition: readTraining.exoPlaying.isTransition,
  isFinished: readTraining.trainingDetails.finished,
  viewOrigin: readTraining.viewOrigin,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentExo: (exoIndex) => dispatch(setCurrentExo(exoIndex)),
  startTraining: () => dispatch(startTraining()),
  pauseTraining: () => dispatch(pauseTraining()),
  stopTraining: () => dispatch(stopTraining()),
  resetTraining: () => dispatch(resetReadTraining()),
  setCountdownTime: (time) => dispatch(setCountdownTime(time)),
  setChronoTime: (time) => dispatch(setChronoTime(time)),
  setGlobalCountdownTime: (time) => dispatch(setGlobalCountdownTime(time)),
  setGlobalChronoTime: (time) => dispatch(setGlobalChronoTime(time)),
  resetReadTraining: () => dispatch(resetReadTraining()),
  setIsTransition: (bool) => dispatch(setIsTransition(bool)),
  endTraining: () => dispatch(endTraining()),
  resetAll: () => dispatch(resetAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReadTrainingView);