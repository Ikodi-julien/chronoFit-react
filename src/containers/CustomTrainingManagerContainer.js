import { connect } from "react-redux";
/*------------------------*/
import CustomManager from "../components/CustomView/CustomManager/CustomManager";
/*------------------------*/
import {
  getLocalTrainings,
  setLocalTraining,
  setLocalTrainingName,
  createLocalTraining,
  deleteLocalTraining,
} from "../actions/trainingLocalActions";

const mapStateToProps = ({ localTraining }) => ({
  itemList: localTraining.allLocalTrainings,
  item: localTraining.localTraining,
  itemName: localTraining.trainingManagerNameInput,
  // timecapValue: localTraining.timecap,
});

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getLocalTrainings()),
  setItem: (trainingName) => dispatch(setLocalTraining(trainingName)),
  setItemName: (value) => dispatch(setLocalTrainingName(value)),
  createItem: () => dispatch(createLocalTraining()),
  deleteItem: () => dispatch(deleteLocalTraining()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomManager);
