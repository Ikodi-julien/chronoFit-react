import {connect} from 'react-redux';

/*--------------------------------*/
// import {
//   getLocalTrainings, 
//   getCurrentLocalTraining,
//   addRoundToLocalTraining,
//   addExerciceToLocalTraining,
//   deleteRoundFromLocalTraining,
// } from '../actions/trainingLocalActions';
import {
  moveRoundInState,
} from '../actions/trainingViewActions';
/*---------------------------------*/
import CustomTrainingView from '../components/Training/CustomTrainingView';

const mapStateToProps = ({training}) => ({
  localTraining: training.localTraining,
})

const mapDispatchToProps = (dispatch) => ({
  moveRoundInState: (oldIndex, newIndex) => dispatch(moveRoundInState(oldIndex, newIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomTrainingView);
