import { connect } from "react-redux";

import {
  addRoundToLocalTraining,
  addExerciceToLocalTraining,
  deleteRoundFromLocalTraining,
  setRoundIteration,
  moveExoInState,
} from "../actions/trainingLocalActions";
import {
  setRoundMenuIsVisible,
  setShrunkenRound,
} from "../actions/trainingViewActions";

import Round from "../components/CustomView/Round/Round";

const mapStateToProps = ({ app }, { round, index }) => ({
  isToRender: app.isToRender,
  roundIndex: index,
  iteration: round.iteration,
  shrunken: round.shrunken,
  exercices: round.exercices,
  menuIsVisible: round.menuIsVisible,
  type: "training",
});

const mapDispatchToProps = (dispatch) => ({
  addRound: () => dispatch(addRoundToLocalTraining()),
  addExercice: (index) => dispatch(addExerciceToLocalTraining(index)),
  deleteRound: (index) => dispatch(deleteRoundFromLocalTraining(index)),
  setShrunken: (roundIndex, bool) =>
    dispatch(setShrunkenRound(roundIndex, bool)),
  setRoundMenuIsVisible: (index, bool) =>
    dispatch(setRoundMenuIsVisible(index, bool)),
  setRoundIteration: (index, value) =>
    dispatch(setRoundIteration(index, value)),
  moveExoInState: (obj) => dispatch(moveExoInState(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Round);
