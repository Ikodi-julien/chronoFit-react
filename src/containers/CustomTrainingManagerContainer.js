import {connect} from 'react-redux';
/*------------------------*/
import CustomTrainingManager from '../components/CustomTrainingView/CustomTrainingManager/CustomTrainingManager';
/*------------------------*/
import {
  getLocalTrainings,
  setLocalTraining,
  setLocalTrainingName,
  createLocalTraining,
  deleteLocalTraining,
} from '../actions/trainingLocalActions';

const mapStateToProps = ({localTraining}) => ({
  trainingList: localTraining.allLocalTrainings,
  training: localTraining.localTraining,
  trainingName: localTraining.trainingManagerNameInput,
  timecapValue: localTraining.timecap,
});

const mapDispatchToProps = (dispatch) => ({
  getLocalTrainings: () => dispatch(getLocalTrainings()),
  setLocalTraining: (trainingName) => dispatch(setLocalTraining(trainingName)), 
  setLocalTrainingName: (value) => dispatch(setLocalTrainingName(value)) ,
  createLocalTraining: () => dispatch(createLocalTraining()),
  deleteLocalTraining: () => dispatch(deleteLocalTraining()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomTrainingManager);
