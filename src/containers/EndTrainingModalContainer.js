import { connect } from "react-redux";

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

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EndTrainingModal);
