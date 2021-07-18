import {connect} from 'react-redux';
import ExoInList from '../components/Training/ExoInList/ExoInList';
import {
  toggleExoInListMenu,
  setInputValue
} from '../actions/trainingActions';

const mapStateToProps = ({training}, {index, name, description, duration, reps, weight, menuIsVisible}) => ({
  index, 
  name, 
  description, 
  duration, 
  reps, 
  weight,
  menuIsVisible
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

export default connect(mapStateToProps, mapDispatchToProps)(ExoInList);