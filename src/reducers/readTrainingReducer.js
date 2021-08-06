const initialState = {
  // TraingDetails
  trainingDetails: {
    name: 'Un super long titre',
    roundIndex: 1,
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
    name: "je suis l'exoPlaying",
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
    default:
      return state;
  }
}

export default reducer;