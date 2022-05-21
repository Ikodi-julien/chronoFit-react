import { connect } from "react-redux";

import RoundMenu from "../components/CustomView/Round/RoundMenu";

import {
  addRoundToLocalTraining,
  addExerciceToLocalTraining,
  deleteRoundFromLocalTraining,
} from "../actions/trainingLocalActions";
import { setRoundMenuIsVisible } from "../actions/trainingViewActions";

const mapStateToProps = (_, { index }) => ({
  index,
});

const mapDispatchToProps = (dispatch) => ({
  addRound: () => dispatch(addRoundToLocalTraining()),
  addExercice: (index) => dispatch(addExerciceToLocalTraining(index)),
  deleteRound: (index) => dispatch(deleteRoundFromLocalTraining(index)),
  setRoundMenuIsVisible: (index, bool) =>
    dispatch(setRoundMenuIsVisible(index, bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoundMenu);
