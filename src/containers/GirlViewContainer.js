import {connect} from 'react-redux';

/*--------------------------------*/
import {
  getGirls,
} from '../actions/trainingAjaxActions';
/*---------------------------------*/
import GirlView from '../components/GirlView/GirlView';

const mapStateToProps = ({apiTraining}) => ({
})

const mapDispatchToProps = (dispatch) => ({
  getGirls: () => dispatch(getGirls()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GirlView);
