import {connect} from 'react-redux';
import TrainingRounds from '../components/Training/TrainingRounds/TrainingRounds';
// import {toggleMenuVisibility} from '../actions/trainingAction';

const mapStateToProps = ({training}, ownProps) => ({
  training: training.rounds
})

const mapDispatchToProps = (dispatch) => ({
  // toggleMenu: () => {
  //   // console.log('toggleMenu');
  //   const action = toggleMenuVisibility();
  //   dispatch(action);
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingRounds);
