import { connect } from "react-redux";

import CountDown from "../components/ReadTrainingView/TimeDisplay/CountDown";

import {
  setCountdownTime,
  setCurrentExo,
  addCountdownToRecord,
} from "../actions/readTrainingActions";

const mapStateToProps = ({ readTraining }, { text }) => ({
  text,
  totalTime: readTraining.exoPlaying.duration,
  time: readTraining.countdownCurrentTime,
  isCounting: readTraining.exoPlaying.isCounting,
  timelineIndex: readTraining.timelineIndex,
});

const mapDispatchToProps = (dispatch) => ({
  setCountdownTime: (time) => dispatch(setCountdownTime(time)),
  setExo: (index) => dispatch(setCurrentExo(index)),
  addCountdownToRecord: () => dispatch(addCountdownToRecord()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountDown);
