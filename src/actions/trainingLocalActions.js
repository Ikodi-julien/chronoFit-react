export const GET_LOCAL_TRAININGS = 'GET_LOCAL_TRAININGS';
export const getLocalTrainings = () => ({type: GET_LOCAL_TRAININGS})

export const GET_LOCAL_TRAININGS_SUCCESS = 'GET_LOCAL_TRAININGS_SUCCESS';
export const getLocalTrainingsSuccess = (data) => ({type: GET_LOCAL_TRAININGS_SUCCESS, data});

export const GET_CURRENT_LOCAL_TRAINING = 'GET_CURRENT_LOCAL_TRAINING';
export const getCurrentLocalTraining = (id) => ({type: GET_CURRENT_LOCAL_TRAINING, value: id});
export const GET_CURRENT_LOCAL_TRAINING_SUCCESS = 'GET_CURRENT_LOCAL_TRAINING_SUCCESS';
export const getCurrentLocalTrainingSuccess = (data) => ({type: GET_CURRENT_LOCAL_TRAINING_SUCCESS, data});