import {connect} from 'react-redux';
import TrainingApiRoundList from '../components/BenchmarkTrainingView/TrainingTimeline/TrainingApiRoundList';

const mapStateToProps = ({apiTraining}) => ({
  rounds: apiTraining.currentTraining.rounds
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(TrainingApiRoundList)