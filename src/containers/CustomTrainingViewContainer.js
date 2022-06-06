import { connect } from "react-redux";

import { moveRoundInState } from "../actions/trainingLocalActions";
/*---------------------------------*/
import CustomTrainingView from "../components/CustomView/CustomTrainingView";

const mapStateToProps = ({ localTraining, app }) => ({
  localTraining: localTraining.localTraining,
  isToRender: app.isToRender,
});

const mapDispatchToProps = (dispatch) => ({
  moveRoundInState: (oldIndex, newIndex) =>
    dispatch(moveRoundInState(oldIndex, newIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomTrainingView);
