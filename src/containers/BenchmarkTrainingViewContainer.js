import {connect} from 'react-redux';

/*--------------------------------*/
import {
  getTrainings, 
  getCurrentTraining,
} from '../actions/trainingAjaxActions';
import {setTrainingId} from '../actions/trainingViewActions';
/*---------------------------------*/
import BenchmarkTrainingView from '../components/BenchmarkTrainingView/BenchmarkTrainingView';

const mapStateToProps = ({apiTraining}) => ({
  allTrainings: apiTraining.allApiTrainings,
})

const mapDispatchToProps = (dispatch) => ({
  getTrainings: () => dispatch(getTrainings()),
  setTrainingId: (id) => dispatch(setTrainingId(id)),
  getCurrentTraining: (id) => dispatch(getCurrentTraining(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchmarkTrainingView);
