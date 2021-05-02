import {connect} from 'react-redux';
import ExoInListMenu from '../components/Training/ExoInListMenu/ExoInListMenu';
import {
  setInputValue,
  toggleExoInListMenu
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
    console.log('ici ok');
    dispatch(toggleExoInListMenu(index))},
  setInputValue: () => dispatch(setInputValue())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ExoInListMenu);