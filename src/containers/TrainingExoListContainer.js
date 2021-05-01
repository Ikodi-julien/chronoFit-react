import {connect} from 'react-redux';
import TrainingExoList from '../components/Training/TrainingExoList/TrainingExoList';
// import {toggleMenuVisibility} from '../actions/trainingAction';

const mapStateToProps = ({training}, ownProps) => ({
  exoList: training.exoList
})

const mapDispatchToProps = (dispatch) => ({
  // toggleMenu: () => {
  //   // console.log('toggleMenu');
  //   const action = toggleMenuVisibility();
  //   dispatch(action);
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingExoList);
