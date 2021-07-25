/* eslint-disable import/no-anonymous-default-export */
const storage = window.localStorage;

export default {
  createTraining: (training) => {
    if (training.name === '') return;
    
    const content64 = btoa(JSON.stringify(training))
    storage.setItem(training.name, content64)
  },
  
  getTrainings: () => {
    const trainings = [];
    for (let index = 0; index < storage.length; index++) {
      trainings.push(JSON.parse(atob(storage.getItem(storage.key(index)))))
    }
    return trainings;
  },
  
  getOneTraining: (trainingName) => (localStorage.getItem(trainingName)),
  
  deleteTraining: (trainingName) => {
    if (trainingName === '') return;
    storage.removeItem(trainingName);
  }
}