import { connect } from "react-redux";
import ExoForm from "../components/CustomView/ExoForm/ExoForm";

import {
  putExoFormInTraining,
  deleteExoFromRound,
  showExoInList,
} from "../actions/trainingLocalActions";

import { setExoFormInputValue } from "../actions/exoFormActions";

const mapStateToProps = ({ exoForm }, { roundIndex, index }) => ({
  name: exoForm.name,
  description: exoForm.desc,
  iteration: exoForm.iteration,
  duration: exoForm.duration,
  reps: exoForm.reps,
  weight: exoForm.weight,

  roundIndex,
  index,
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
