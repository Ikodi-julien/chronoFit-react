import { connect } from "react-redux";

import GlobalCountDown from "../components/ReadTrainingView/TimeDisplay/GlobalCountDown";

import {setGlobalCountdownTime, endTraining, stopTraining } from '../actions/readTrainingActions';

const mapStateToProps = ({readTraining}, {text}) => ({
  text,
  time: readTraining.globalCountdown.currentTime,
  timelineIndex: readTraining.timelineIndex,
  isCounting: readTraining.globalCountdown.isCounting,
  timecap: readTraining.trainingDetails.timecap,

})

const mapDispatchToProps = (dispatch) => ({
  setTime: (time) => dispatch(setGlobalCountdownTime(time)),
  endTraining: () => dispatch(endTraining()),
  stopTraining: () => dispatch(stopTraining()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GlobalCountDown)