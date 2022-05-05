import Landing from "../components/Landing/Landing";
import { getMe } from "../actions/authActions";
import { connect } from "react-redux";

const mapStateToProps = ({ auth }, ownProps) => ({
  isUserLoggued: auth.isUserLoggued,
});

const mapDispatchToProps = (dispatch) => ({
  getMe: () => dispatch(getMe()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
