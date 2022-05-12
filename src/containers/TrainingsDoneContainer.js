import { connect } from "react-redux";
import TrainingsDoneView from "../components/TrainingsDoneView/TrainingsDoneView";
import { getTrainingsDone } from "../actions/trainingAjaxActions";

const mapStateToProps = ({ trainingsDone }) => ({
  trainings: trainingsDone.trainings,
});

const mapDispatchToProps = (dispatch) => ({
  getTrainingsDone: () => dispatch(getTrainingsDone()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingsDoneView);
