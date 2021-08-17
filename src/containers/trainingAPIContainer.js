import {connect} from 'react-redux';
import TrainingAPI from '../components/BenchmarkTrainingView/Training/TrainingAPI';

const mapStateToProps = ({apiTraining}) => ({
  rounds: apiTraining.currentTraining.rounds
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(TrainingAPI)