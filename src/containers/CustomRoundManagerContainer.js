import { connect } from "react-redux";
/*------------------------*/
import CustomManager from "../components/CustomView/CustomManager/CustomManager";
/*------------------------*/
import {
  setCustomRoundName,
  setCustomRound,
  getLocalRounds,
  createLocalRound,
} from "../actions/roundLocalActions";

const mapStateToProps = ({ localRound }) => ({
  item: localRound.localRound,
  itemName: localRound.roundManagerNameInput,
  itemList: localRound.allLocalRounds,
});

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getLocalRounds()),
  setItem: (value) => dispatch(setCustomRound(value)),
  setItemName: (value) => dispatch(setCustomRoundName(value)),
  createItem: () => dispatch(createLocalRound()),
  deleteItem: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomManager);
