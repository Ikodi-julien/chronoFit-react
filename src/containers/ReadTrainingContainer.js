import {connect} from 'react-redux';
import ReadTrainingView from '../components/ReadTrainingView/ReadTrainingView';
import { 
  setCurrentExo,
  startChrono,
  pauseChrono,
  setExoPlayingTime,
  setGlobalTime,
  resetReadTraining,
} from '../actions/readTrainingActions';

const mapStateToProps = ({readTraining}) => ({
  timelineIndex: readTraining.timelineIndex,
  trainingDetails: readTraining.trainingDetails,
  nextExo: readTraining.nextExo,
  previousExo: readTraining.previousExo,
  exoPlaying: readTraining.exoPlaying,
  globalTime: readTraining.globalTime,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentExo: (exoIndex) => dispatch(setCurrentExo(exoIndex)),
  startChrono: () => dispatch(startChrono()),
  pauseChrono: () => dispatch(pauseChrono()),
  setExoPlayingTime: (time) => dispatch(setExoPlayingTime(time)),
  setGlobalTime: (time) => dispatch(setGlobalTime(time)),
  resetReadTraining: () => dispatch(resetReadTraining()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReadTrainingView);