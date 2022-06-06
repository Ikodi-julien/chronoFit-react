import { connect } from "react-redux";
import ExoForm from "../components/CustomView/ExoForm/ExoForm";

import {
  putExoFormInRound,
  deleteExoFromCustomRound,
} from "../actions/roundLocalActions";

import {
  setExoFormInputValue,
  showRoundExoInList,
} from "../actions/exoFormActions";

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
  showExoInList: (_, exoIndex) => dispatch(showRoundExoInList(_, exoIndex)),
  putExo: (_, exoIndex) => dispatch(putExoFormInRound(exoIndex)),
  deleteExo: (_, exoIndex) => dispatch(deleteExoFromCustomRound(exoIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExoForm);
