import {
  SET_READ_TRAINING
} from '../actions/readTrainingActions';
// import trainingServices from '../services/training';

const initialState = {
  timeline: [],
  // TraingDetails
  trainingDetails: {
    name: 'Un super long titre',
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
  switch (action.type) {
    case SET_READ_TRAINING:
      console.log('trainingDetails', action.trainingDetails);
      console.log('timeLine', action.timeline);
      
      return {
        ...state,
        timeline: action.timeline,
        // TraingDetails
        trainingDetails: {
          name: action.trainingDetails.name,
          roundIndex: action.timeline[0].roundIndex,
          roundCount: action.timeline[0].roundCount,
          currentRoundDuration: action.timeline[0].roundDuration,
        },
        // ExoDetails
        nextExo: {
          name: action.timeline[1].name,
          reps: action.timeline[1].reps,
          duration: action.timeline[1].duration,
          weight: action.timeline[1].weight,
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
          name: action.timeline[0].name,
          description: action.timeline[0].description,
          serieIndex: action.timeline[0].serieIndex,
          serieCount: action.timeline[0].serieCount,
          reps: action.timeline[0].reps,
          weight: action.timeline[0].weight,
        },
        //Time
        timeDisplay: {
          exoPlaying : {
            total: action.timeline[0].duration,
            remaining: action.timeline[0].duration,
            fromBeginning: 0,
          },
          training: {
            total: action.trainingDetails.duration,
            remaining: action.trainingDetails.duration,
            fromBeginning: 0,
          }
        }
      }
    default:
      return state;
  }
}

export default reducer;