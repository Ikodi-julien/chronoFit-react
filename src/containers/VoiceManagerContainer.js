import { connect } from "react-redux";
import { setIsSpeaking } from "../actions/readTrainingActions";
import VoiceManager from "../components/ReadTrainingView/VoiceManager/VoiceManager";

const mapStateToProps = ({readTraining}) => ({
  isSpeaking: readTraining.isSpeaking,
})

const mapDispatchToProps = (dispatch) => ({
  setIsSpeaking: (bool) => dispatch(setIsSpeaking(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(VoiceManager)