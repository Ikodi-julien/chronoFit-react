import { connect } from "react-redux";

// import // addRoundToLocalTraining,
// // addExerciceToLocalTraining,
// // deleteRoundFromLocalTraining,
// // setRoundIteration,
// // moveExoInState,
// // setLocalRoundType,
// "../actions/roundLocalActions";
// import // setRoundMenuIsVisible,
// // setShrunkenRound,
// "../actions/roundViewActions";

import Round from "../components/CustomView/Round/Round";

const mapStateToProps = ({ app, localRound }) => ({
  isToRender: app.isToRender,
  isAPI: localRound.isApi,
  // Pour Round
  roundIndex: 0,
  iteration: localRound.localRound.iteration,
  exercices: localRound.localRounds.exercices,
  menuIsVisible: localRound.menuIsVisible,
});

const mapDispatchToProps = (dispatch) => ({
  // addExercice: (index) => dispatch(addExerciceToLocalTraining(index)),
  // setRoundMenuIsVisible: (index, bool) =>
  //   dispatch(setRoundMenuIsVisible(index, bool)),
  // setRoundIteration: (index, value) =>
  //   dispatch(setRoundIteration(index, value)),
  // moveExoInState: (obj) => dispatch(moveExoInState(obj)),
  // setRoundType: (roundIndex, value) =>
  //   dispatch(setLocalRoundType(roundIndex, value)),
  // // Pour RoundMenu
  // addExercice,
  // setRoundMenuIsVisible,
});

export default connect(mapStateToProps, mapDispatchToProps)(Round);
