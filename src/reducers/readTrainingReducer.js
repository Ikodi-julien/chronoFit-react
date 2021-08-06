import {
  SET_READ_TRAINING,
  SET_CURRENT_EXO
} from '../actions/readTrainingActions';
// import trainingServices from '../services/training';

const initialState = {
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
    name: "ExoPlaying",
    description: 'je suis la description de exoPlaying',
    serieIndex: 1,
    serieCount: 5,
    reps: 10,
    weight: 20,
  },
  //Time
  timeDisplay: {
    exoPlaying : {
      total: 200,
      remaining: 41,
      fromBeginning: 159,
    },
    training: {
      total: 400,
      remaining: 82,
      fromBeginning: 318,
    }
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
      }
      
    case SET_CURRENT_EXO:
      // console.log('trainingDetails', action.trainingDetails);
      // console.log('timeLine', action.timeline);
      if (state.timeline[exoIndex].beginning) exoIndex++;
      if (state.timeline[exoIndex].end) return state;
      
      return {
        ...state,
        timelineIndex: exoIndex,
        trainingDetails: {
          ...state.trainingDetails,
          roundIndex: state.timeline[exoIndex].roundIndex,
          roundCount: state.timeline[exoIndex].roundCount,
          currentRoundDuration: state.timeline[exoIndex].roundDuration,
        },
        // ExoDetails
        nextExo: {
          name: state.timeline[exoIndex + 1].name,
          reps: state.timeline[exoIndex + 1].reps,
          duration: state.timeline[exoIndex + 1].duration,
          weight: state.timeline[exoIndex + 1].weight,
        },
        previousExo: {
          name:  state.timeline[exoIndex - 1] ? state.timeline[exoIndex - 1].name : '',
          serieCount: state.timeline[exoIndex - 1] ? state.timeline[exoIndex - 1].serieCount : '',
          reps: state.timeline[exoIndex - 1] ? state.timeline[exoIndex - 1].reps : '',
          duration: state.timeline[exoIndex - 1] ? state.timeline[exoIndex - 1].duration : '',
          weight: state.timeline[exoIndex - 1] ? state.timeline[exoIndex - 1].weight : '',
        },
        // ExoPlaying
        exoPlaying: {
          name: state.timeline[exoIndex].name,
          description: state.timeline[exoIndex].description,
          serieIndex: state.timeline[exoIndex].serieIndex,
          serieCount: state.timeline[exoIndex].serieCount,
          reps: state.timeline[exoIndex].reps,
          weight: state.timeline[exoIndex].weight,
        },
        //Time
        timeDisplay: {
          exoPlaying : {
            total: state.timeline[exoIndex].duration,
            remaining: state.timeline[exoIndex].duration,
            fromBeginning: 0,
          },
          training: {
            total: state.trainingDetails.duration,
            remaining: state.trainingDetails.duration,
            fromBeginning: 0,
          }
        }
      }
    default:
      return state;
  }
}

export default reducer;