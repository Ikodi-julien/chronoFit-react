import {connect} from 'react-redux';
import ReadTrainingView from '../components/ReadTrainingView/ReadTrainingView';
import { 
  setCurrentExo,
  startChrono,
  pauseChrono,
  setExoPlayingTime,
  setGlobalTime,
  resetReadTraining,
  tellNextExoName,
  setResetCurrent,
} from '../actions/readTrainingActions';

const mapStateToProps = ({readTraining}) => ({
  timelineIndex: readTraining.timelineIndex,
  trainingDetails: readTraining.trainingDetails,
  nextExo: readTraining.nextExo,
  exoPlaying: readTraining.exoPlaying,
  globalTime: readTraining.globalTime,
  resetCurrent: readTraining.globalTime.resetCurrent,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentExo: (exoIndex) => dispatch(setCurrentExo(exoIndex)),
  startChrono: () => dispatch(startChrono()),
  pauseChrono: () => dispatch(pauseChrono()),
  setExoPlayingTime: (time) => dispatch(setExoPlayingTime(time)),
  setGlobalTime: (time) => dispatch(setGlobalTime(time)),
  resetReadTraining: () => dispatch(resetReadTraining()),
  tellNextExoName: () => dispatch(tellNextExoName()),
  setResetCurrent: (bool) => dispatch(setResetCurrent(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReadTrainingView);