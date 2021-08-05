import {connect} from 'react-redux';
import ConfirmModal from '../components/ConfirmModal/ConfirmModal';
import {
  setModalIsOpen
} from '../actions/appActions';

const mapStateToProps = ({app}, {text, actionToDispatch}) => ({
  isOpen: app.confirmModalIsOpen,
  text,
  actionToDispatch,
});

const mapDispatchToProps = (dispatch) => ({
  setModalIsOpen: (bool) => dispatch(setModalIsOpen(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmModal);