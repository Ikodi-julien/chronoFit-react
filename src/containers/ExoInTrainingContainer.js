import { connect } from "react-redux";
import ExoInList from "../components/CustomView/ExoInList/ExoInList";

import { showExoInTrainingForm } from "../actions/exoFormActions";

const mapStateToProps = (
  { localTraining, apiTraining, localRound },
  { type, roundIndex, index }
) => {
  let exo, roundShrunken;

  switch (type) {
    case "api":
      exo = apiTraining.currentTraining.rounds[roundIndex].exercices[index];
      roundShrunken = () => {
        return apiTraining.currentTraining.rounds[roundIndex].exercices.length >
          1 && apiTraining.currentTraining.rounds[roundIndex].shrunken
          ? true
          : false;
      };
      break;
    case "training":
      exo = localTraining.localTraining.rounds[roundIndex].exercices[index];
      roundShrunken = () => {
        return localTraining.localTraining.rounds[roundIndex].exercices.length >
          2 && localTraining.localTraining.rounds[roundIndex].shrunken
          ? true
          : false;
      };
      break;

    case "round":
      exo = localRound.localRound.exercices[index];
      roundShrunken = () => {
        return localRound.localRound.exercices.length > 2 && localRound.shrunken
          ? true
          : false;
      };
      break;

    default:
      break;
  }

  return {
    name: exo.name,
    description: exo.description,
    iteration: +exo.options[0].iteration,
    duration: +exo.options[0].duration,
    reps: +exo.options[0].reps,
    weight: +exo.options[0].weight,

    roundShrunken: roundShrunken(),
    roundIndex,
    index,
  };
};

const mapDispatchToProps = (dispatch) => ({
  showExoForm: (roundIndex, exoIndex) =>
    dispatch(showExoInTrainingForm(roundIndex, exoIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExoInList);
