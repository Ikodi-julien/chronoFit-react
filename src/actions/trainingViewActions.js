// ExoForm input actions
export const EXOFORM_INPUT_CHANGE = "EXOFORM_INPUT_CHANGE";
export const setExoFormInputValue = (inputObject) => ({
  type: EXOFORM_INPUT_CHANGE,
  name: inputObject.name,
  value: inputObject.value
})


export const SET_TRAINING_ID = 'SET_TRAINING_ID';
export const setTrainingId = (id) => ({type: SET_TRAINING_ID, value: id});

export const SET_ROUNDMENU_IS_VISIBLE = 'SET_ROUNDMENU_IS_VISIBLE';
export const setRoundMenuIsVisible = (index, bool) => ({type: SET_ROUNDMENU_IS_VISIBLE, value: {index, bool}});

export const SET_ROUND_ITERATION = 'SET_ROUND_ITERATION';
export const setRoundIteration = (index, value) => ({type: SET_ROUND_ITERATION, value: {index, value}});

export const SHOW_EXO_FORM = 'SHOW_EXO_FORM';
export const showExoForm = (roundIndex, exoIndex) => ({ type: SHOW_EXO_FORM, value: {roundIndex, exoIndex}});

export const SHOW_EXO_IN_LIST = 'SHOW_EXO_IN_LIST';
export const showExoInList = (roundIndex, exoIndex) => ({ type: SHOW_EXO_IN_LIST, value: {roundIndex, exoIndex}});

export const MOVE_ROUND_IN_STATE = 'MOVE_ROUND_IN_STATE';
export const moveRoundInState = (oldIndex, newIndex) => ({type: MOVE_ROUND_IN_STATE, oldIndex, newIndex});

// A mettre dans un benchmarkTrainingActions ?
export const ADD_EXO = "Au clic, ajoute un exercice dans la training.exoList lors de la soumission du formulaire";
export const addExo = () => ({
  type: ADD_EXO
})
