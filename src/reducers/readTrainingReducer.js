const initialState = {
  name: 'test',
  roundIndex: 1,
  currentRoundDuration: 60,
};

const reducer = (state=initialState, action={}) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;