import { connect } from "react-redux";
import RecapTrainingModal from "../components/RecapTrainingsView/RecapTrainingModal/RecapTrainingModal";
import {
  setRecapTraingModalIsOpen,
  deleteTraining,
} from "../actions/recapTrainingsActions";

const mapStateToProps = ({ recapTrainings }) => ({
  training: recapTrainings.currentTraining,
  isOpen: recapTrainings.recapTrainingModalIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  setModalIsOpen: (bool) => dispatch(setRecapTraingModalIsOpen(bool)),
  deleteTraining: (id) => dispatch(deleteTraining(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecapTrainingModal);
