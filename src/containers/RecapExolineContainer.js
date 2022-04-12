import RecapExoLine from "../components/ReadTrainingView/EndTrainingModal/RecapExoLine/RecapExoLine";
import { connect } from "react-redux";
import { setEndTrainingValue } from "../actions/readTrainingActions";

const mapStateToProps = ({ readTraining }, { key, index, isModif }) => ({
  key,
  index,
  name: readTraining.trainingRecord[index].name,
  description: readTraining.trainingRecord[index].description,
  duration: readTraining.trainingRecord[index].duration,
  reps: readTraining.trainingRecord[index].reps,
  weight: readTraining.trainingRecord[index].weight,
  isModif,
});

const mapDispatchToProps = (dispatch) => ({
  setValue: (index, name, value) =>
    dispatch(setEndTrainingValue(index, name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecapExoLine);
