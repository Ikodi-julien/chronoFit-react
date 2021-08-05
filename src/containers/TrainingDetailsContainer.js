import {connect} from 'react-redux';
import TrainingDetails from '../components/ReadTrainingView/TrainingDetails/TrainingDetails';
const mapStateToProps = ({readTraining}) => ({
  name: readTraining.name,
  roundIndex: readTraining.roundIndex,
  currentRoundDuration: readTraining.currentRoundDuration,
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(TrainingDetails);