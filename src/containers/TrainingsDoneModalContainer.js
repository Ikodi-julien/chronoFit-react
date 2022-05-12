import { connect } from "react-redux";
import TrainingsDoneModal from "../components/TrainingsDoneView/TrainingsDoneModal/TrainingsDoneModal";
import {
  setRecapTraingModalIsOpen,
  deleteTraining,
  modifyTrainingDone,
} from "../actions/trainingsDoneActions";

const mapStateToProps = ({ trainingsDone }) => ({
  training: trainingsDone.currentTraining,
  isOpen: trainingsDone.recapTrainingModalIsOpen,
  isModif: trainingsDone.isModif,
});

const mapDispatchToProps = (dispatch) => ({
  setModalIsOpen: (bool) => dispatch(setRecapTraingModalIsOpen(bool)),
  deleteTraining: (id) => dispatch(deleteTraining(id)),
  modifyTrainingDone: (bool) => dispatch(modifyTrainingDone(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingsDoneModal);
