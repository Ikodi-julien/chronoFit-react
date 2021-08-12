import {connect} from 'react-redux';
import ExoForm from '../components/CustomTrainingView/ExoForm/ExoForm';

import {

} from '../actions/trainingViewActions';

import {
  putExoFormInTraining,
  deleteExoFromRound,
  setExoFormInputValue,
  showExoInList,
} from '../actions/trainingLocalActions';

const mapStateToProps = ({localTraining}, { roundIndex, index, }) => ({
  name: localTraining.exoForm.name, 
  description: localTraining.exoForm.desc, 
  iteration: localTraining.exoForm.iteration,
  duration: localTraining.exoForm.duration, 
  reps: localTraining.exoForm.reps, 
  weight: localTraining.exoForm.weight,
  
  roundIndex,
  index,
})

const mapDispatchToProps = (dispatch) => ({
  setValue: (inputName, inputValue) => dispatch(setExoFormInputValue({name: inputName, value: inputValue})),
  showExoInList: (roundIndex, exoIndex) => dispatch(showExoInList(roundIndex, exoIndex)),
  putExo: (roundIndex, exoIndex) => dispatch(putExoFormInTraining(roundIndex, exoIndex)),
  deleteExo: (roundIndex, exoIndex) => dispatch(deleteExoFromRound(roundIndex, exoIndex)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExoForm);