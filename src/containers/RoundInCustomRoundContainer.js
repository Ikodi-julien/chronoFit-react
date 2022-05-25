import { connect } from "react-redux";

import {
  addExerciceToCustomRound,
  // // deleteRoundFromLocalTraining,
  // // setRoundIteration,
  // // moveExoInState,
  // // setLocalRoundType,
  // "../actions/roundLocalActions";
  // import // setRoundMenuIsVisible,
  // // setShrunkenRound,
} from "../actions/roundLocalActions";

import Round from "../components/CustomView/Round/Round";

const mapStateToProps = ({ app, localRound }) => ({
  isToRender: app.isToRender,
  isAPI: localRound.isApi,
  roundIndex: 0,
  iteration: localRound.iteration,
  exercices: localRound.exercices,
  menuIsVisible: localRound.menuIsVisible,
  type: "round",
});

const mapDispatchToProps = (dispatch) => ({
  addExercice: (index) => dispatch(addExerciceToCustomRound(index)),
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
