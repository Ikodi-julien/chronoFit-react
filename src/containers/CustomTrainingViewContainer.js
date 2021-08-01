import {connect} from 'react-redux';

/*--------------------------------*/
import {
  getLocalTrainings, 
  getCurrentLocalTraining,
  addRoundToLocalTraining,
  addExerciceToLocalTraining,
  deleteRoundFromLocalTraining,
} from '../actions/trainingLocalActions';
import {
  setTrainingId,
  setRoundMenuIsVisible,
  setRoundIteration,
  showExoForm,
  showExoInList,
} from '../actions/trainingViewActions';
/*---------------------------------*/
import CustomTrainingView from '../components/Training/CustomTrainingView';

const mapStateToProps = ({training}) => ({
  localTraining: training.localTraining,
})

const mapDispatchToProps = (dispatch) => ({
  getTrainings: () => dispatch(getLocalTrainings()),
  setTrainingId: (id) => dispatch(setTrainingId(id)),
  getCurrentTraining: (id) => dispatch(getCurrentLocalTraining(id)),
  addRoundToLocalTraining: () => dispatch(addRoundToLocalTraining()),
  addExerciceToLocalTraining: (index) => dispatch(addExerciceToLocalTraining(index)),
  deleteRoundFromLocalTraining: (index) => dispatch(deleteRoundFromLocalTraining(index)),
  setRoundMenuIsVisible: (index, bool) => dispatch(setRoundMenuIsVisible(index, bool)),
  setRoundIteration: (index, value) => dispatch(setRoundIteration(index, value)),
  showExoForm: (roundIndex, exoIndex) => dispatch(showExoForm(roundIndex, exoIndex)),
  showExoInList: (roundIndex, exoIndex) => dispatch(showExoInList(roundIndex, exoIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomTrainingView);
