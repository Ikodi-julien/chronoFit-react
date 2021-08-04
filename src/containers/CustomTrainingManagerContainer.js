import {connect} from 'react-redux';
/*------------------------*/
import CustomTrainingManager from '../components/Training/CustomTrainingManager/CustomTrainingManager';
/*------------------------*/
import {
  getLocalTrainings,
  setLocalTraining,
  setLocalTrainingName,
  setLocalTrainingType,
  createLocalTraining,
  deleteLocalTraining,
} from '../actions/trainingLocalActions';

const mapStateToProps = ({training}) => ({
  trainingList: training.allLocalTrainings,
  training: training.localTraining,
  trainingName: training.localTrainingName,
});

const mapDispatchToProps = (dispatch) => ({
  getLocalTrainings: () => dispatch(getLocalTrainings()),
  setLocalTraining: (trainingName) => dispatch(setLocalTraining(trainingName)), 
  setLocalTrainingName: (value) => dispatch(setLocalTrainingName(value)) ,
  setLocalTrainingType: (value) => dispatch (setLocalTrainingType(value)),
  createLocalTraining: () => dispatch(createLocalTraining()),
  deleteLocalTraining: () => dispatch(deleteLocalTraining()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomTrainingManager);
