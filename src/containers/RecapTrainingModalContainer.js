import { connect } from "react-redux";
import RecapTrainingModal from "../components/RecapTrainingsView/RecapTrainingModal/RecapTrainingModal";
import { setRecapTraingModalIsOpen } from "../actions/recapTrainingsActions";

const mapStateToProps = ({ recapTrainings }) => ({
  training: recapTrainings.currentTraining,
  isOpen: recapTrainings.recapTrainingModalIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  setModalIsOpen: (bool) => dispatch(setRecapTraingModalIsOpen(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecapTrainingModal);
