/* eslint-disable import/no-anonymous-default-export */
const storage = window.localStorage;

export default {
  // TRAININGS
  createTraining: (training) => {
    if (training.name === "") return;

    const content64 = btoa(JSON.stringify(training));
    storage.setItem(`wod-${training.name}`, content64);
  },

  getTrainings: () => {
    const trainings = [];
    for (let index = 0; index < storage.length; index++) {
      if (storage.key(index).substring(0, 4) === "wod-") {
        trainings.push(JSON.parse(atob(storage.getItem(storage.key(index)))));
      }
    }
    return trainings;
  },

  getOneTraining: (trainingName) => localStorage.getItem(`wod-${trainingName}`),

  deleteTraining: (trainingName) => {
    if (trainingName === "") return;
    storage.removeItem(`wod-${trainingName}`);
  },
  // ROUNDS
  createRound: (round) => {
    if (round.name === "") return;

    const content64 = btoa(JSON.stringify(round));
    storage.setItem(`rnd-${round.name}`, content64);
  },
  getRounds: () => {
    const rounds = [];
    for (let index = 0; index < storage.length; index++) {
      if (storage.key(index).substring(0, 4) === "rnd-") {
        rounds.push(JSON.parse(atob(storage.getItem(storage.key(index)))));
      }
    }
    return rounds;
  },
  getOneRound: (roundName) => localStorage.getItem(`rnd-${roundName}`),

  deleteRound: (roundName) => {
    if (roundName === "") return;
    storage.removeItem(`rnd-${roundName}`);
  },
};
