import {connect} from 'react-redux';

/*--------------------------------*/
import {
  getTrainings, 
  getCurrentTraining,
} from '../actions/trainingAjaxActions';
import {setTrainingId} from '../actions/trainingViewActions';
/*---------------------------------*/
import TrainingBenchmarkView from '../components/Training/TrainingBenchmarkView';

const mapStateToProps = ({training}, {path}) => ({
  allTrainings: training.allTrainings,
  currentTrainingId: training.currentTrainingId,
  currentTraining: training.currentTraining,
  path: path,
})

const mapDispatchToProps = (dispatch) => ({
  getTrainings: () => dispatch(getTrainings()),
  setTrainingId: (id) => dispatch(setTrainingId(id)),
  getCurrentTraining: (id) => dispatch(getCurrentTraining(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingBenchmarkView);
