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
  setTimecap,
} from '../actions/trainingLocalActions';
import { setReadTraining } from '../actions/readTrainingActions';

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
  setReadTraining: () => dispatch(setReadTraining()),
  setTimecap: (value) => dispatch(setTimecap(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomTrainingManager);
