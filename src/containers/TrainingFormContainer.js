import {connect} from 'react-redux';
import TrainingForm from '../components/Training/TrainingForm/TrainingForm';
import {
  setInputValue,
  addExo
} from '../actions/trainingActions';

const mapStateToProps = ({training}, ownProps) => ({
  exoForm: training.exoForm
})

const mapDispatchToProps = (dispatch) => ({
  setInputValue: (inputObject) => {
    // console.log('setInputValue');
    const action = setInputValue(inputObject);
    dispatch(action);
  },
  addExo: () => dispatch(addExo())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingForm);
