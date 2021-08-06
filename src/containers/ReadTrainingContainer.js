import {connect} from 'react-redux';
import ReadTrainingView from '../components/ReadTrainingView/ReadTrainingView';

const mapStateToProps = ({readTraining}) => ({
  trainingDetails: readTraining.trainingDetails,
  nextExo: readTraining.nextExo,
  previousExo: readTraining.previousExo,
  exoPlaying: readTraining.exoPlaying,
  timeDisplay: readTraining.timeDisplay,
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(ReadTrainingView);