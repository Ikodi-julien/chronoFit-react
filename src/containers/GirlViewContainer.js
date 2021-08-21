import {connect} from 'react-redux';

/*--------------------------------*/
import {
  getGirls,
} from '../actions/trainingAjaxActions';
import {
  setTypeSelected
} from '../actions/trainingViewActions';
/*---------------------------------*/
import GirlView from '../components/GirlView/GirlView';

const mapStateToProps = ({apiTraining}) => ({
  getGirlsSuccess: apiTraining.getGirlsSuccess,
})

const mapDispatchToProps = (dispatch) => ({
  getGirls: () => dispatch(getGirls()),
  setTypeSelected: (value) => dispatch(setTypeSelected(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GirlView);
