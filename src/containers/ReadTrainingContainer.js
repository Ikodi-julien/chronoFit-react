import {connect} from 'react-redux';
import ReadTrainingView from '../components/ReadTrainingView/ReadTrainingView';
import { 
  setCurrentExo,
  startChrono,
  pauseChrono,
  setExoPlayingTime,
} from '../actions/readTrainingActions';

const mapStateToProps = ({readTraining}) => ({
  currentExoIndex: readTraining.timelineIndex,
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
  setExoPlayingTime: (time) => dispatch(setExoPlayingTime(time))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReadTrainingView);