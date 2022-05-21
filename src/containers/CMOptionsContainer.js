import { connect } from "react-redux";
import CMOptions from "../components/CustomView/CustomManager/CMOptions";
import { setReadTraining } from "../actions/readTrainingActions";
import { setTimecap, setTrainingType } from "../actions/trainingLocalActions";

const mapStateToProps = ({ localTraining }) => ({
  training: localTraining.localTraining,
  timecapValue: localTraining.localTraining.timecap,
  typeValue: localTraining.localTraining.type,
});

const mapDispatchToProps = (dispatch) => ({
  setReadTraining: () => dispatch(setReadTraining()),
  setTimecap: (value) => dispatch(setTimecap(value)),
  setType: (value) => dispatch(setTrainingType(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CMOptions);
