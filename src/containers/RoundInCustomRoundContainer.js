import { connect } from "react-redux";

import {
  addExerciceToCustomRound,
  setCustomRoundIteration,
  moveExoInCustomRound,
  // import // setRoundMenuIsVisible,
} from "../actions/roundLocalActions";

import Round from "../components/CustomView/Round/Round";

const mapStateToProps = ({ app, localRound }) => ({
  isToRender: app.isToRender,
  roundExoFormIsVisible: app.roundExoFormIsVisible,
  isAPI: localRound.localRound.isApi,
  roundIndex: 0,
  iteration: localRound.localRound.iteration,
  exercices: localRound.localRound.exercices,
  menuIsVisible: localRound.localRound.menuIsVisible,
  type: "round",
});

const mapDispatchToProps = (dispatch) => ({
  addExercice: (index) => dispatch(addExerciceToCustomRound(index)),
  // setRoundMenuIsVisible: (index, bool) =>
  //   dispatch(setRoundMenuIsVisible(index, bool)),
  setRoundIteration: (index, value) => dispatch(setCustomRoundIteration(value)),
  moveExoInState: (obj) => dispatch(moveExoInCustomRound(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Round);
