export const GET_TRAININGS = 'GET_TRAININGS';
export const getTrainings = () => ({type: GET_TRAININGS})

export const GET_TRAININGS_SUCCESS = 'GET_TRAININGS_SUCCESS';
export const getTrainingsSuccess = (data) => ({type: GET_TRAININGS_SUCCESS, data});

export const GET_CURRENT_TRAINING = 'GET_CURRENT_TRAINING';
export const getCurrentTraining = (id) => ({type: GET_CURRENT_TRAINING, value: id});
export const GET_CURRENT_TRAINING_SUCCESS = 'GET_CURRENT_TRAINING_SUCCESS';
export const getCurrentTrainingSuccess = (data) => ({type: GET_CURRENT_TRAINING_SUCCESS, data});