import {connect} from 'react-redux';
import AppNav from '../components/AppNav/AppNav';
import {toggleMenuVisibility} from '../actions/appActions';

const mapStateToProps = ({app}, ownProps) => ({
  menuIsVisible: app.menuIsVisible
})

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => {
    // console.log('toggleMenu');
    const action = toggleMenuVisibility();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNav);
