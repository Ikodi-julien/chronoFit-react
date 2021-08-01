import {connect} from 'react-redux';
import ExoForm from '../components/Training/ExoForm/ExoForm';

import {
  setExoFormInputValue,
  showExoInList,
} from '../actions/trainingViewActions';

import {
  putExoFormInTraining,
  deleteExoFromRound,
} from '../actions/trainingLocalActions';

const mapStateToProps = ({training}, { roundIndex, index, }) => ({
  name: training.exoForm.name, 
  description: training.exoForm.desc, 
  iteration: training.exoForm.iteration,
  duration: training.exoForm.duration, 
  reps: training.exoForm.reps, 
  weight: training.exoForm.weight,
  
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