import { connect } from "react-redux";
import ExoForm from "../components/CustomView/ExoForm/ExoForm";

import {
  putExoFormInTraining,
  deleteExoFromRound,
} from "../actions/trainingLocalActions";

import { setExoFormInputValue, showExoInList } from "../actions/exoFormActions";

const mapStateToProps = ({ exoForm }) => ({
  name: exoForm.name,
  description: exoForm.desc,
  iteration: exoForm.iteration,
  duration: exoForm.duration,
  reps: exoForm.reps,
  weight: exoForm.weight,
  roundIndex: exoForm.roundIndex,
  index: exoForm.exoIndex,
});

const mapDispatchToProps = (dispatch) => ({
  setValue: (inputName, inputValue) =>
    dispatch(setExoFormInputValue({ name: inputName, value: inputValue })),
  showExoInList: (roundIndex, exoIndex) =>
    dispatch(showExoInList(roundIndex, exoIndex)),
  putExo: (roundIndex, exoIndex) =>
    dispatch(putExoFormInTraining(roundIndex, exoIndex)),
  deleteExo: (roundIndex, exoIndex) =>
    dispatch(deleteExoFromRound(roundIndex, exoIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExoForm);
