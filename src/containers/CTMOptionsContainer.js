import { connect } from "react-redux";
import CTMOptions from "../components/CustomTrainingView/CustomTrainingManager/CTMOptions";
import { setReadTraining } from '../actions/readTrainingActions';
import { setTimecap } from '../actions/trainingLocalActions';

const mapStateToProps = ({localTraining}) => ({
  training: localTraining.localTraining,
  timecapValue: localTraining.localTraining.timecap,
})

const mapDispatchToProps = (dispatch) => ({
  setReadTraining: () => dispatch(setReadTraining()),
  setTimecap: (value) => dispatch(setTimecap(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CTMOptions);