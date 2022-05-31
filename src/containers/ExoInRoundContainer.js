import { connect } from "react-redux";
import ExoInList from "../components/CustomView/ExoInList/ExoInList";

import { showExoRoundForm } from "../actions/exoFormActions";

const mapStateToProps = ({ localRound }, { index }) => {
  const exo = localRound.localRound.exercices[index];
  const roundShrunken = () => {
    return localRound.localRound.exercices.length > 2 && localRound.shrunken
      ? true
      : false;
  };

  return {
    name: exo.name,
    description: exo.description,
    iteration: +exo.options[0].iteration,
    duration: +exo.options[0].duration,
    reps: +exo.options[0].reps,
    weight: +exo.options[0].weight,
    roundShrunken: roundShrunken(),
    roundIndex: 0,
    index,
  };
};

const mapDispatchToProps = (dispatch) => ({
  showExoForm: (exoIndex) => dispatch(showExoRoundForm(exoIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExoInList);
