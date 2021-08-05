export const SET_TRAINING_ID = 'SET_TRAINING_ID';
export const setTrainingId = (id) => ({type: SET_TRAINING_ID, value: id});

export const SET_ROUNDMENU_IS_VISIBLE = 'SET_ROUNDMENU_IS_VISIBLE';
export const setRoundMenuIsVisible = (index, bool) => ({type: SET_ROUNDMENU_IS_VISIBLE, value: {index, bool}});

export const SET_SHRUNKEN_ROUND = 'SET_SHRUNKEN_ROUND';
export const setShrunkenRound = (index, bool) => ({type: SET_SHRUNKEN_ROUND, value: {index, bool}});

