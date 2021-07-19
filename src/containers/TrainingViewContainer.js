import {connect} from 'react-redux';

/*--------------------------------*/
import {
  getTrainings, 
  getCurrentTraining,
} from '../actions/trainingAjaxActions';
import {setTrainingId} from '../actions/trainingViewActions';
/*---------------------------------*/
import TrainingView from '../components/Training/TrainingView';

const mapStateToProps = ({training}, ownProps) => ({
  allTrainings: training.allTrainings,
  currentTrainingId: training.currentTrainingId,
  currentTraining: training.currentTraining,
})

const mapDispatchToProps = (dispatch) => ({
  getTrainings: () => dispatch(getTrainings()),
  setTrainingId: (id) => dispatch(setTrainingId(id)),
  getCurrentTraining: (id) => dispatch(getCurrentTraining(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingView);
