import {connect} from 'react-redux';

// import {
//   // addRoundToLocalTraining,
//   // addExerciceToLocalTraining,
//   // deleteRoundFromLocalTraining,
//   // setRoundIteration,
//   // moveExoInState,
//   // setLocalRoundType,
// } from '../actions/trainingLocalActions';
import {
  // setRoundMenuIsVisible,
  setShrunkenApiRound,
} from '../actions/trainingViewActions';

import Round from '../components/CustomTrainingView/Round/Round';

const mapStateToProps = ({app}, {isAPI, round, roundIndex}) => ({
  isToRender: app.isToRender,
  roundIndex: roundIndex,
  iteration:  round.iteration,
  shrunken: round.shrunken,
  exercices: round.exercices,
  menuIsVisible: round.menuIsVisible,
  isAPI: isAPI
})

const mapDispatchToProps = (dispatch) => ({
  // addRound: () => dispatch(addRoundToLocalTraining()), 
  // addExercice: (index) => dispatch(addExerciceToLocalTraining(index)), 
  // deleteRound: (index) => dispatch(deleteRoundFromLocalTraining(index)),
  setShrunken: (roundIndex, bool) => dispatch(setShrunkenApiRound(roundIndex, bool)),
  // setRoundMenuIsVisible: (index, bool) => dispatch(setRoundMenuIsVisible(index, bool)), 
  // setRoundIteration: (index, value) => dispatch(setRoundIteration(index, value)),
  // moveExoInState: (obj) => dispatch(moveExoInState(obj)),
  // setRoundType: (roundIndex, value) => dispatch(setLocalRoundType(roundIndex, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Round)