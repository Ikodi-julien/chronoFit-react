import {connect} from 'react-redux';

/*--------------------------------*/
import {
  getLocalTrainings, 
  getCurrentLocalTraining,
} from '../actions/trainingLocalActions';
import {setTrainingId} from '../actions/trainingViewActions';
/*---------------------------------*/
import TrainingCustomView from '../components/Training/TrainingCustomView';

const mapStateToProps = ({training}, {path}) => ({
  allTrainings: training.allTrainings,
  currentTrainingId: training.currentTrainingId,
  currentTraining: training.currentTraining,
  path,
})

const mapDispatchToProps = (dispatch) => ({
  getTrainings: () => dispatch(getLocalTrainings()),
  setTrainingId: (id) => dispatch(setTrainingId(id)),
  getCurrentTraining: (id) => dispatch(getCurrentLocalTraining(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingCustomView);
