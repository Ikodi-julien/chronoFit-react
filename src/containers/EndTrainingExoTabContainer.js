import ExoTab from "../components/ExoTab/ExoTab";
import { connect } from "react-redux";
import {
  setEndTrainingValue,
  deleteExoFromEndTrainingRecap,
} from "../actions/readTrainingActions";

const mapStateToProps = ({ readTraining }, { isModif }) => ({
  isModif,
  exos: readTraining.trainingRecord,
  render: readTraining.render,
});

const mapDispatchToProps = (dispatch) => ({
  setValue: (index, name, value) =>
    dispatch(setEndTrainingValue(index, name, value)),
  deleteExo: (index) => dispatch(deleteExoFromEndTrainingRecap(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExoTab);
