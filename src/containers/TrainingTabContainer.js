import { connect } from "react-redux";
import TrainingTab from "../components/TrainingTab/TrainingTab";
import { sortTrainingTab } from "../actions/trainingsDoneActions";

const mapStateToProps = ({ trainingsDone }) => ({
  trainings: trainingsDone.shownTrainings,
});

const mapDispatchToProps = (dispatch) => ({
  sortTrainingTab: (value) => dispatch(sortTrainingTab(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingTab);
