import {connect} from 'react-redux';
import ExoDetails from '../components/ReadTrainingView/ExoDetails/ExoDetails';

const mapStateToProps = ({readTraining}) => ({
  exo: readTraining.nextExo,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ExoDetails);