import {connect} from 'react-redux';
import { getOneGirl } from '../actions/trainingAjaxActions';
import TrainingApiList from '../components/GirlView/TrainingApiList/TrainingApiList';

const mapStateToProps = ({apiTraining}) => ({
  girlList: apiTraining.girls,
  trainingIsSet: apiTraining.trainingIsSet,
  typeSelected: apiTraining.typeSelected,
  getOneIsLoading: apiTraining.getOneIsLoading,
})

const mapDispatchToProps = (dispatch) => ({
  getOneGirl: (id) => dispatch(getOneGirl(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrainingApiList)