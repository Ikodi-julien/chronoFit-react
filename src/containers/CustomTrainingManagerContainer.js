import {connect} from 'react-redux';
/*------------------------*/
import CustomTrainingManager from '../components/Training/CustomTrainingManager/CustomTrainingManager';
/*------------------------*/
import {
  getLocalTrainings,
  setLocalTraining,
  setLocalTrainingName,
  createLocalTraining,
  deleteLocalTraining,
} from '../actions/trainingLocalActions';

const mapStateToProps = ({training}) => ({
  list: training.allLocalTrainings,
  localTraining: training.localTraining,
  localTrainingName: training.localTrainingName,
});

const mapDispatchToProps = (dispatch) => ({
  getLocalTrainings: () => dispatch(getLocalTrainings()),
  setLocalTraining: (trainingName) => dispatch(setLocalTraining(trainingName)), 
  setLocalTrainingName: (value) => dispatch(setLocalTrainingName(value)) ,
  createLocalTraining: () => dispatch(createLocalTraining()),
  deleteLocalTraining: () => dispatch(deleteLocalTraining()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomTrainingManager);
