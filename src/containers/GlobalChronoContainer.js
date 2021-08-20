import { connect } from "react-redux";

import GlobalChrono from "../components/ReadTrainingView/TimeDisplay/GlobalChrono";

import {setGlobalChronoTime, resetReadTraining } from '../actions/readTrainingActions';

const mapStateToProps = ({readTraining}, {text}) => ({
  text,
  time: readTraining.globalChrono.currentTime,
  timelineIndex: readTraining.timelineIndex,
  isCounting: readTraining.globalChrono.isCounting,
})

const mapDispatchToProps = (dispatch) => ({
  setTime: (time) => dispatch(setGlobalChronoTime(time)),
  resetTraining: () => dispatch(resetReadTraining()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GlobalChrono)