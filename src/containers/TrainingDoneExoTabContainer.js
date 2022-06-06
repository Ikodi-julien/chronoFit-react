import ExoTab from "../components/ExoTab/ExoTab";

import { connect } from "react-redux";
import {
  setTrainingDoneModalValue,
  deleteExoFromTrainingDone,
} from "../actions/trainingsDoneActions";

const mapStateToProps = ({ trainingsDone }, { isModif }) => ({
  isModif,
  exos: trainingsDone.currentTraining.exos,
  render: trainingsDone.render,
});

const mapDispatchToProps = (dispatch) => ({
  setValue: (index, name, value) =>
    dispatch(setTrainingDoneModalValue(index, name, value)),
  deleteExo: (index) => dispatch(deleteExoFromTrainingDone(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExoTab);
