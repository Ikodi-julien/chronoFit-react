import { connect } from "react-redux";
import TrainingsDoneModalExoTab from "../components/TrainingsDoneModalExoTab/TrainingsDoneModalExoTab";
import { modifyTrainingDone } from "../actions/trainingsDoneActions";

const mapStateToProps = ({ trainingsDone }) => ({
  training: trainingsDone.currentTraining,
  isModif: trainingsDone.isModif,
});

const mapDispatchToProps = (dispatch) => ({
  modifyTrainingDone: (bool) => dispatch(modifyTrainingDone(bool)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainingsDoneModalExoTab);
