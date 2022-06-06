import { connect } from "react-redux";
import CMOptions from "../components/CustomView/CustomManager/CMOptions";
import { setReadTraining } from "../actions/readTrainingActions";
import {
  setLocalTrainingType,
  setLocalTrainingTimecap,
} from "../actions/trainingLocalActions";

const mapStateToProps = ({ localTraining }) => ({
  training: localTraining.localTraining,
  timecapValue: localTraining.localTraining.timecap,
  typeValue: localTraining.localTraining.type,
});

const mapDispatchToProps = (dispatch) => ({
  setReadTraining: () => dispatch(setReadTraining()),
  setTimecap: (value) => dispatch(setLocalTrainingTimecap(value)),
  setType: (value) => dispatch(setLocalTrainingType(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CMOptions);
