import { connect } from "react-redux";
import TrainingTab from "../components/TrainingTab/TrainingTab";
import { sortTrainingTab } from "../actions/recapTrainingsActions";

const mapStateToProps = ({ recapTrainings }) => ({
  trainings: recapTrainings.trainings,
});

const mapDispatchToProps = (dispatch) => ({
  sortTrainingTab: (value) => dispatch(sortTrainingTab(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingTab);
