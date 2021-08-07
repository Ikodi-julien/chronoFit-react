import {
  SET_READ_TRAINING,
  SET_CURRENT_EXO,
  START_CHRONO,
  PAUSE_CHRONO,
  SET_EXOPLAYING_TIME,
  SET_GLOBAL_TIME,
  RESET_READTRAINING,
  END_TRAINING,
} from '../actions/readTrainingActions';
import trainingServices from '../services/training';

const initialState = {
  render:0,
  timeline: [],
  timelineIndex: 0,
  // TraingDetails
  trainingDetails: {
    name: 'Un super long titre',
    duration: 400,
    roundIndex: 1,
    roundCount: 5,
    currentRoundDuration: 1300,
  },
  // ExoDetails
  nextExo: {
    name: 'Burpees',
    serieCount: 1,
    reps: 10,
    duration: 120,
    weight: 20,
  },
  previousExo: {
    name: 'Handstand push-up',
    serieCount: 3,
    reps: 5,
    duration: 100,
    weight: 15,
  },
  // ExoPlaying
  exoPlaying: {
    isCounting: false,
    name: "ExoPlaying",
    description: 'je suis la description de exoPlaying',
    serieIndex: 1,
    serieCount: 5,
    reps: 10,
    weight: 20,
    // ExoPlaying - TimeDisplay
    duration: 200,
    currentTime: 41,
    fromBeginning: 159,
  },
  //GlobalTime
  globalTime: {
    duration: 82,
    currentTime: 400,
    fromBeginning: 318,
  }
};

const reducer = (state=initialState, action={}) => {
  
  let {exoIndex} = action;
  
  switch (action.type) {
    case SET_READ_TRAINING:
      return {
        ...state,
        timeline: action.timeline,
        trainingDetails: {
          name: action.trainingDetails.name,
          duration: action.trainingDetails.duration,
        },
        globalTime: {
          duration: action.trainingDetails.duration,
          currentTime: action.trainingDetails.duration,
        }
      }
      
    case SET_CURRENT_EXO:
      // console.log('trainingDetails', action.trainingDetails);
      // console.log('timeLine', action.timeline);
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
        },
        globalTime: {
          ...state.globalTime,
          isCounting: false,
          currentTime: trainingServices.getRemainingDuration(state.timeline, exoIndex),
        }
      }
      
    case START_CHRONO:
      return {
        ...state,
        exoPlaying: {
          ...state.exoPlaying,
          isCounting: true,
        },
        globalTime: {
          ...state.globalTime,
          isCounting: true,
        },
      }

    case PAUSE_CHRONO:
      return {
        ...state,
        exoPlaying: {
          ...state.exoPlaying,
          isCounting: false,
        },
        globalTime: {
          ...state.globalTime,
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

    case SET_GLOBAL_TIME:
      return {
        ...state,
        globalTime: {
          ...state.globalTime,
          isCounting: state.exoPlaying.isCounting,
          currentTime: action.time,
        }
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
        globalTime: {
          ...state.globalTime,
          isCounting: false,
        }
      }

    default:
      return state;
  }
}

export default reducer;