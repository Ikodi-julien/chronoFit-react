import {connect} from 'react-redux';
import ReadTrainingView from '../components/ReadTrainingView/ReadTrainingView';
import { 
  setCurrentExo,
  startTraining,
  pauseTraining,
  setExoPlayingTime,
  setChronoTime,
  setGlobalCountdownTime,
  setGlobalChronoTime,
  resetReadTraining,
  tellNextExoName,
  setGlobalCountdownSkipTime,
} from '../actions/readTrainingActions';

const mapStateToProps = ({readTraining}) => ({
  timelineIndex: readTraining.timelineIndex,
  trainingDetails: readTraining.trainingDetails,
  nextExo: readTraining.nextExo,
  exoPlaying: readTraining.exoPlaying,
  exoPlayingSkipTime: readTraining.exoPlaying.skipTime,
  globalCountdown: readTraining.globalCountdown,
  globalChrono: readTraining.globalChrono,
  globalCountdownSkipTime: readTraining.globalCountdown.skipTime,
  isChrono: readTraining.exoPlaying.isChrono,
  chronoTime: readTraining.chronoCurrentTime,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentExo: (exoIndex) => dispatch(setCurrentExo(exoIndex)),
  startTraining: () => dispatch(startTraining()),
  pauseTraining: () => dispatch(pauseTraining()),
  setExoPlayingTime: (time) => dispatch(setExoPlayingTime(time)),
  setChronoTime: (time) => dispatch(setChronoTime(time)),
  setGlobalCountdownTime: (time) => dispatch(setGlobalCountdownTime(time)),
  setGlobalChronoTime: (time) => dispatch(setGlobalChronoTime(time)),
  resetReadTraining: () => dispatch(resetReadTraining()),
  tellNextExoName: () => dispatch(tellNextExoName()),
  setGlobalCountdownSkipTime: (bool) => dispatch(setGlobalCountdownSkipTime(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReadTrainingView);