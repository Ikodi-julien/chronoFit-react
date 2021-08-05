import {connect} from 'react-redux';

import {
  addRoundToLocalTraining,
  addExerciceToLocalTraining,
  deleteRoundFromLocalTraining,
} from '../actions/trainingLocalActions';
import {
  setRoundMenuIsVisible,
  setRoundIteration,
  moveExoInState,
  setShrunkenRound,
} from '../actions/trainingViewActions';

import Round from '../components/Training/Round/Round';

const mapStateToProps = ({training}, {round, index}) => ({
  isToRender: training.isToRender,
  roundIndex: index,
  iteration:  round.iteration,
  shrunken: round.shrunken,
  exercices: round.exercices,
  menuIsVisible: round.menuIsVisible,
})

const mapDispatchToProps = (dispatch) => ({
  addRound: () => dispatch(addRoundToLocalTraining()), 
  addExercice: (index) => dispatch(addExerciceToLocalTraining(index)), 
  deleteRound: (index) => dispatch(deleteRoundFromLocalTraining(index)),
  setShrunken: (roundIndex, bool) => dispatch(setShrunkenRound(roundIndex, bool)),
  setRoundMenuIsVisible: (index, bool) => dispatch(setRoundMenuIsVisible(index, bool)), 
  setRoundIteration: (index, value) => dispatch(setRoundIteration(index, value)),
  moveExoInState: (obj) => dispatch(moveExoInState(obj)),
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Round)