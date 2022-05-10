export const DISPLAY_TRAINING_DETAILS = "DISPLAY_TRAINING_DETAILS";
export const displayTrainingDetails = (id) => ({
  type: DISPLAY_TRAINING_DETAILS,
  value: id,
});
export const setRecapTraingModalIsOpen = (bool) => ({
  type: SET_TRAINING_MODAL_ISOPEN,
  value: bool,
});
export const SET_TRAINING_MODAL_ISOPEN = "SET_TRAINING_MODAL_ISOPEN";
export const sortTrainingTab = (value) => ({
  type: SORT_TRAINING_TAB,
  value,
});
export const SORT_TRAINING_TAB = "SORT_TRAINING_TAB";
export const DELETE_TRAINING = "DELETE_TRAINING";
export const deleteTraining = (id) => ({ type: DELETE_TRAINING, value: id });
