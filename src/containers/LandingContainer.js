import Landing from "../components/Landing/Landing";
import { getMe, logout } from "../actions/authActions";
import { connect } from "react-redux";

const mapStateToProps = ({ auth }, ownProps) => ({
  isUserLoggued: auth.isUserLoggued,
  nickname: auth.nickname,
});

const mapDispatchToProps = (dispatch) => ({
  getMe: () => dispatch(getMe()),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
