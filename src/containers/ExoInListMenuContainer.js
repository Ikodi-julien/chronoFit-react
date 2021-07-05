import {connect} from 'react-redux';
import ExoInListMenu from '../components/Training/ExoInListMenu/ExoInListMenu';
import {
  setExoInListInputValue,
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
    
  setExoInListInputValue: (inputObject, index) => {
    const finalObject = {...inputObject, index: index};
    console.log('dans ExoMenuContainer', finalObject);
    
    dispatch(setExoInListInputValue(finalObject));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ExoInListMenu);