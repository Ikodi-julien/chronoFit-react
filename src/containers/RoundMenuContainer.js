import { connect } from "react-redux";

import RoundMenu from "../components/CustomView/Round/RoundMenu";

import {
  addRoundToLocalTraining,
  addLocalRoundToLocalTraining,
  addExerciceToLocalTraining,
  deleteRoundFromLocalTraining,
} from "../actions/trainingLocalActions";
import { getLocalRounds } from "../actions/roundLocalActions";
import { setRoundMenuIsVisible } from "../actions/trainingViewActions";

const mapStateToProps = ({ localRound }, { index }) => ({
  localRounds: localRound.allLocalRounds,
  index,
});

const mapDispatchToProps = (dispatch) => ({
  addRound: () => dispatch(addRoundToLocalTraining()),
  addLocalRound: (index) => dispatch(addLocalRoundToLocalTraining(index)),
  getLocalRounds: () => dispatch(getLocalRounds()),
  addExercice: (index) => dispatch(addExerciceToLocalTraining(index)),
  deleteRound: (index) => dispatch(deleteRoundFromLocalTraining(index)),
  setRoundMenuIsVisible: (index, bool) =>
    dispatch(setRoundMenuIsVisible(index, bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoundMenu);
