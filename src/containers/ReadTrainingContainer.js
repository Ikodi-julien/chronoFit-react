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
  tellNextExoName,
} from '../actions/readTrainingActions';

const mapStateToProps = ({readTraining}) => ({
  timelineIndex: readTraining.timelineIndex,
  trainingDetails: readTraining.trainingDetails,
  nextExo: readTraining.nextExo,
  exoPlaying: readTraining.exoPlaying,
  globalCountdown: readTraining.globalCountdown,
  globalChrono: readTraining.globalChrono,
  isChrono: readTraining.exoPlaying.isChrono,
  chronoTime: readTraining.chronoCurrentTime,
  countdownTime: readTraining.countdownCurrentTime,
  timecap: readTraining.trainingDetails.timecap,
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
  tellNextExoName: () => dispatch(tellNextExoName()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReadTrainingView);