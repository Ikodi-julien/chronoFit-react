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
import { setReadTraining } from '../actions/readTrainingActions';

const mapStateToProps = ({localTraining}) => ({
  trainingList: localTraining.allLocalTrainings,
  training: localTraining.localTraining,
  trainingName: localTraining.trainingManagerNameInput,
});

const mapDispatchToProps = (dispatch) => ({
  getLocalTrainings: () => dispatch(getLocalTrainings()),
  setLocalTraining: (trainingName) => dispatch(setLocalTraining(trainingName)), 
  setLocalTrainingName: (value) => dispatch(setLocalTrainingName(value)) ,
  createLocalTraining: () => dispatch(createLocalTraining()),
  deleteLocalTraining: () => dispatch(deleteLocalTraining()),
  setReadTraining: () => dispatch(setReadTraining()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomTrainingManager);
