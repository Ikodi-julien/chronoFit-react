import {connect} from 'react-redux';
import Round from '../components/Training/Round/Round';
import {
  toggleExoInListMenu,
  setInputValue
} from '../actions/trainingActions';

const mapStateToProps = (_, {index, duration, iteration, shrunken, exoList}) => ({
  index,
  duration,
  iteration,
  shrunken,
  exoList,
})

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: (index) => {
    dispatch(toggleExoInListMenu(index));
  },
  setInputValue: (inputObject) => {
    dispatch(setInputValue(inputObject))
  }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Round);