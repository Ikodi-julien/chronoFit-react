import {connect} from 'react-redux';

/*--------------------------------*/
import {
  getLocalTrainings, 
  getCurrentLocalTraining,
  addRoundToLocalTraining,
  deleteRoundFromLocalTraining,
} from '../actions/trainingLocalActions';
import {
  setTrainingId,
  setRoundMenuIsVisible,
} from '../actions/trainingViewActions';
/*---------------------------------*/
import CustomTrainingView from '../components/Training/CustomTrainingView';

const mapStateToProps = ({training}) => ({
  localTraining: training.localTraining,
})

const mapDispatchToProps = (dispatch) => ({
  getTrainings: () => dispatch(getLocalTrainings()),
  setTrainingId: (id) => dispatch(setTrainingId(id)),
  getCurrentTraining: (id) => dispatch(getCurrentLocalTraining(id)),
  addRoundToLocalTraining: () => dispatch(addRoundToLocalTraining()),
  deleteRoundFromLocalTraining: (index) => dispatch(deleteRoundFromLocalTraining(index)),
  setRoundMenuIsVisible: (index, bool) => dispatch(setRoundMenuIsVisible(index, bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomTrainingView);
