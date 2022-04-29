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
