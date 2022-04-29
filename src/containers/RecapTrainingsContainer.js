import { connect } from "react-redux";
import RecapTrainingsView from "../components/RecapTrainingsView/RecapTrainingsView";
import { getTrainingsDone } from "../actions/trainingAjaxActions";

const mapStateToProps = ({ recapTrainings }) => ({
  trainings: recapTrainings.trainings,
});

const mapDispatchToProps = (dispatch) => ({
  getTrainingsDone: () => dispatch(getTrainingsDone()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecapTrainingsView);
