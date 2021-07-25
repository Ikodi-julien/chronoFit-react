import {connect} from 'react-redux';

/*--------------------------------*/
import {
  getLocalTrainings, 
  getCurrentLocalTraining,
} from '../actions/trainingLocalActions';
import {setTrainingId} from '../actions/trainingViewActions';
/*---------------------------------*/
import CustomTrainingView from '../components/Training/CustomTrainingView';

const mapStateToProps = ({training}, {path}) => ({
  allLocalTrainings: training.allLocalTrainings,
  localTraining: training.localTraining,
})

const mapDispatchToProps = (dispatch) => ({
  getTrainings: () => dispatch(getLocalTrainings()),
  setTrainingId: (id) => dispatch(setTrainingId(id)),
  getCurrentTraining: (id) => dispatch(getCurrentLocalTraining(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomTrainingView);
