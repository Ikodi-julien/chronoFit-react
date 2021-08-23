import AppComment from "../components/AppComment/AppComment";
import { connect } from "react-redux";
import {setAppCommentIsOpen} from '../actions/appActions';

const mapStateToProps = ({app}) => ({
  text: app.messageToUser,
  open: app.commentIsOpen,
})

const mapDispatchToProps = (dispatch) => ({
  setOpen: (bool) => dispatch(setAppCommentIsOpen(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppComment)