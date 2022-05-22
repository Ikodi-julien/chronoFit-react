// ExoForm input actions
export const EXOFORM_INPUT_CHANGE = "EXOFORM_INPUT_CHANGE";
export const setExoFormInputValue = (inputObject) => ({
  type: EXOFORM_INPUT_CHANGE,
  name: inputObject.name,
  value: inputObject.value,
});
export const SET_TIMECAP = "SET_TIMECAP";
export const setTimecap = (value) => ({ type: SET_TIMECAP, value });
export const SET_TRAINING_TYPE = "SET_TRAINING_TYPE";
export const setTrainingType = (value) => ({ type: SET_TRAINING_TYPE, value });
