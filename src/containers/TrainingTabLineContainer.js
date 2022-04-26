import { connect } from "react-redux";
import TrainingTabLine from "../components/TrainingTab/TrainingTabLine/TrainingTabLine";
import { displayTrainingDetails } from "../actions/recapTrainingsActions";

const mapStateToProps = (state, { training }) => ({
  training,
});

const mapDispatchToProps = (dispatch) => ({
  displayTrainingDetails: () => dispatch(displayTrainingDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingTabLine);
