import {connect} from 'react-redux';
import ReadTrainingView from '../components/ReadTrainingView/ReadTrainingView';
import { setCurrentExo } from '../actions/readTrainingActions';

const mapStateToProps = ({readTraining}) => ({
  trainingDetails: readTraining.trainingDetails,
  nextExo: readTraining.nextExo,
  previousExo: readTraining.previousExo,
  exoPlaying: readTraining.exoPlaying,
  timeDisplay: readTraining.timeDisplay,
  currentExoIndex: readTraining.timelineIndex,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentExo: (exoIndex) => dispatch(setCurrentExo(exoIndex)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReadTrainingView);