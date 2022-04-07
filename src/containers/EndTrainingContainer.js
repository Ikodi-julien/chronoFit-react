import { connect } from "react-redux";

import EndTrainingModal from "../components/EndTrainingModal/EndTrainingModal";
import { testTimeline } from "../data/testTimeline";
// import {
//   addRoundToLocalTraining,
//   addExerciceToLocalTraining,
//   deleteRoundFromLocalTraining,
// } from '../actions/trainingLocalActions';
// import {
//   setRoundMenuIsVisible,
// } from '../actions/trainingViewActions';

const mapStateToProps = ({ readTraining }) => ({
  // timeline: readTraining.timeline,
  timeline: testTimeline,
});

const mapDispatchToProps = (dispatch) => ({
  // addRound: () => dispatch(addRoundToLocalTraining()),
  // addExercice: (index) => dispatch(addExerciceToLocalTraining(index)),
  // deleteRound: (index) => dispatch(deleteRoundFromLocalTraining(index)),
  // setRoundMenuIsVisible: (index, bool) => dispatch(setRoundMenuIsVisible(index, bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EndTrainingModal);
