import { connect } from "react-redux";
/*------------------------*/
import CustomManager from "../components/CustomView/CustomManager/CustomManager";
/*------------------------*/
import // getLocalTrainings,
// setLocalTraining,
// setLocalTrainingName,
// createLocalTraining,
// deleteLocalTraining,
"../actions/trainingLocalActions";

const mapStateToProps = ({ localRound }) => ({
  item: localRound,
  itemName: localRound.roundManagerNameInput,
  itemList: localRound.allLocalRounds,
});

const mapDispatchToProps = (dispatch) => ({
  getItems: () => {},
  setItem: () => {},
  setItemName: () => {},
  createItem: () => {},
  deleteItem: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomManager);
