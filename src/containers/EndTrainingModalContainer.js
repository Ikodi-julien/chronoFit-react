import { connect } from "react-redux";

import { resetRecordTraining } from "../actions/readTrainingActions";
import EndTrainingModal from "../components/ReadTrainingView/EndTrainingModal/EndTrainingModal";

const mapStateToProps = (
  { readTraining },
  { actionToDispatch, viewOrigin }
) => ({
  // timeline: readTraining.timeline,
  trainingRecord: readTraining.trainingRecord,
  trainingDuration: readTraining.globalChrono.currentTime,
  trainingName: readTraining.trainingDetails.name,
  actionToDispatch,
  viewOrigin,
});

const mapDispatchToProps = (dispatch) => ({
  resetRecordTraining: () => dispatch(resetRecordTraining()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EndTrainingModal);
