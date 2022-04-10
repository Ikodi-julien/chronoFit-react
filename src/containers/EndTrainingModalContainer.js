import { connect } from "react-redux";

import EndTrainingModal from "../components/ReadTrainingView/EndTrainingModal/EndTrainingModal";
import { testTimeline } from "../data/testTimeline";

const mapStateToProps = (
  { readTraining },
  { actionToDispatch, viewOrigin }
) => ({
  // timeline: readTraining.timeline,
  timeline: testTimeline,
  trainingDuration: readTraining.globalChrono.currentTime,
  trainingName: readTraining.trainingDetails.name,
  actionToDispatch,
  viewOrigin,
});

const mapDispatchToProps = (dispatch) => ({
  // addRound: () => dispatch(addRoundToLocalTraining()),
  // addExercice: (index) => dispatch(addExerciceToLocalTraining(index)),
  // deleteRound: (index) => dispatch(deleteRoundFromLocalTraining(index)),
  // setRoundMenuIsVisible: (index, bool) => dispatch(setRoundMenuIsVisible(index, bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EndTrainingModal);
