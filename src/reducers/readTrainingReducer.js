import {
  SET_READ_TRAINING,
  SET_CURRENT_EXO,
  START_TRAINING,
  PAUSE_TRAINING,
  SET_EXOPLAYING_TIME,
  SET_GLOBAL_COUNTDOWN_TIME,
  SET_GLOBAL_CHRONO_TIME,
  SET_CHRONO_TIME,
  RESET_READTRAINING,
  END_TRAINING,
  SET_GLOBAL_COUNTDOWN_SKIP_TIME,
} from '../actions/readTrainingActions';
import trainingServices from '../services/training';
import defaultTimeline from '../data/defaultTimeline';

const initialState = {
  render:0,
  timeline: defaultTimeline,
  timelineIndex: 0,
  // TraingDetails
  trainingDetails: {
    name: '',
    duration: '',
    roundIndex: '',
    roundCount: '',
    currentRoundDuration: '',
  },
  // ExoDetails
  nextExo: {
    name: '',
    serieCount: '',
    reps: '',
    duration: '',
    weight: '',
  },
  previousExo: {
    name: '',
    serieCount: '',
    reps: '',
    duration: '',
    weight: '',
  },
  // ExoPlaying
  exoPlaying: {
    isCounting: false,
    name: 'Sélectionner un entrainement',
    description: '',
    serieIndex: '',
    serieCount: '',
    reps: '',
    weight: '',
    // ExoPlaying - TimeDisplay
    duration: '',
    currentTime: '',
    isChrono: '',
  },
  chronoCurrentTime: '',
  countDownCurrentTime: '',
  //GlobalCountdown
  globalCountdown: {
    isCounting: false,
    duration: '',
    currentTime: '',
    skipTime: false,
  },
  globalChrono: {
    isCounting: false,
    currentTime: 0,
    skipTime: false,
  },
};

const reducer = (state=initialState, action={}) => {
  
  let {exoIndex} = action || 0;
  
  switch (action.type) {
    case SET_READ_TRAINING:
      return {
        ...state,
        timeline: action.timeline,
        trainingDetails: {
          name: action.trainingDetails.name,
          duration: action.trainingDetails.duration,
        },
        globalCountdown: {
          ...state.globalCountdown,
          duration: action.trainingDetails.duration,
          currentTime: action.trainingDetails.duration,
        },
        globalChrono: {
          isCounting: false,
          currentTime: 0,
        },
      }
      
    case SET_CURRENT_EXO:

      if (state.timeline[exoIndex].beginning) exoIndex++;
      if (exoIndex === state.timeline.length - 1) return state;
      
      return {
        ...state,
        render: Math.random(),
        timelineIndex: exoIndex,
        trainingDetails: {
          ...state.trainingDetails,
          roundIndex: state.timeline[exoIndex].roundIndex,
          roundCount: state.timeline[exoIndex].roundCount,
          currentRoundDuration: state.timeline[exoIndex].roundDuration,
        },
        // ExoDetails
        nextExo: {
          ...state.nextExo,
          name: state.timeline[exoIndex + 1].name,
          serieCount: state.timeline[exoIndex + 1].serieCount,
          reps: state.timeline[exoIndex + 1].reps,
          duration: state.timeline[exoIndex + 1].duration,
          weight: state.timeline[exoIndex + 1].weight,
        },
        previousExo: {
          ...state.previousExo,
          name:  state.timeline[exoIndex - 1] ? state.timeline[exoIndex - 1].name : '',
          serieCount: state.timeline[exoIndex - 1] ? state.timeline[exoIndex - 1].serieCount : '',
          reps: state.timeline[exoIndex - 1] ? state.timeline[exoIndex - 1].reps : '',
          duration: state.timeline[exoIndex - 1] ? state.timeline[exoIndex - 1].duration : '',
          weight: state.timeline[exoIndex - 1] ? state.timeline[exoIndex - 1].weight : '',
        },
        // ExoPlaying
        exoPlaying: {
          ...state.exoPlaying,
          name: state.timeline[exoIndex].name,
          description: state.timeline[exoIndex].description,
          serieIndex: state.timeline[exoIndex].serieIndex,
          serieCount: state.timeline[exoIndex].serieCount,
          reps: state.timeline[exoIndex].reps,
          weight: state.timeline[exoIndex].weight,
          duration: state.timeline[exoIndex].duration,
          currentTime: state.timeline[exoIndex].duration,
          isChrono: state.timeline[exoIndex].duration === 0 ? true : false,
        },
        chronoCurrentTime: 0,
        countDownCurrentTime: state.timeline[exoIndex].duration,
        globalCountdown: {
          ...state.globalCountdown,
          skipTime: true,
          currentTime: trainingServices.getRemainingDuration(state.timeline, exoIndex),
        },
        
      }
      
    case START_TRAINING:
      return {
        ...state,
        exoPlaying: {
          ...state.exoPlaying,
          isCounting: true,
        },
        globalCountdown: {
          ...state.globalCountdown,
          isCounting: true,
        },
        globalChrono: {
          ...state.globalChrono,
          isCounting: true,
        },
      }

    case PAUSE_TRAINING:
      return {
        ...state,
        exoPlaying: {
          ...state.exoPlaying,
          isCounting: false,
        },
        globalCountdown: {
          ...state.globalCountdown,
          isCounting: false,
        },
      }
        
    case SET_EXOPLAYING_TIME:
      return {
        ...state,
        exoPlaying: {
          ...state.exoPlaying,
          currentTime: action.time,
        }
      }

    case SET_CHRONO_TIME:
      return {
        ...state,
        chronoCurrentTime: action.time,
      }
      
    case SET_GLOBAL_COUNTDOWN_TIME:
      return {
        ...state,
        globalCountdown: {
          ...state.globalCountdown,
          currentTime: action.time,
        },
      }
      
    
    case SET_GLOBAL_CHRONO_TIME:
      return {
        ...state,
        globalChrono: {
          ...state.globalChrono,
          currentTime: action.time,
        },
      }
        
    case RESET_READTRAINING:
      return initialState;
      
    case END_TRAINING:
      return {
        ...state,
        exoPlaying: {
          ...state.exoPlaying,
          isCounting: false,
        },
        globalCountdown: {
          ...state.globalCountdown,
          isCounting: false,
        },
        globalChrono: {
          ...state.globalChrono,
          isCounting: false,
        }
      }

    case SET_GLOBAL_COUNTDOWN_SKIP_TIME:
      return {
        ...state,
        globalCountdown: {
          ...state.globalCountdown,
          skipTime: action.value,
        }
      }
        
    default:
      return state;
  }
}

export default reducer;