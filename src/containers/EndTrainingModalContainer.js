import { connect } from "react-redux";

import {
  resetRecordTraining,
  postNewTraining,
  resetAll,
} from "../actions/readTrainingActions";
import EndTrainingModal from "../components/ReadTrainingView/EndTrainingModal/EndTrainingModal";

const mapStateToProps = (
  { readTraining, auth },
  { actionToDispatch, viewOrigin }
) => ({
  // timeline: readTraining.timeline,
  trainingRecord: readTraining.trainingRecord,
  trainingDuration: readTraining.globalChrono.currentTime,
  trainingName: readTraining.trainingDetails.name,
  trainingType: readTraining.trainingDetails.type,
  isUserLoggued: auth.isUserLoggued,
});

const mapDispatchToProps = (dispatch) => ({
  resetRecordTraining: () => dispatch(resetRecordTraining()),
  postNewTraining: () => dispatch(postNewTraining()),
  resetAll: () => dispatch(resetAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EndTrainingModal);
