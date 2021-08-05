import {connect} from 'react-redux';
import ExoInList from '../components/Training/ExoInList/ExoInList';

import {
  showExoForm,
} from '../actions/trainingViewActions';

const mapStateToProps = ({training}, { roundIndex, index }) => {
  const exo = training.localTraining.rounds[roundIndex].exercices[index];
  // console.log(exo)
  return {
    name: exo.name,
    description: exo.description, 
    iteration: +exo.options[0].iteration,
    duration: +exo.options[0].duration, 
    reps: +exo.options[0].reps, 
    weight: +exo.options[0].weight,
    
    roundIndex,
    index,
  }
}

const mapDispatchToProps = (dispatch) => ({
  showExoForm: (roundIndex, exoIndex) => dispatch(showExoForm(roundIndex, exoIndex)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExoInList);