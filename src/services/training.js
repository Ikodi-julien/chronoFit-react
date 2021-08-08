/* eslint-disable import/no-anonymous-default-export */
const trainingServices = {
  /**
   * Returns a formated time from seconds '12mn 10s' for instance
   * @param {number} seconds 
   * @returns string
   */
  formatSeconds: (seconds) => `${Math.floor(seconds / 60)}mn ${seconds % 60}s`,
  /**
   * Return a chrono formated string '12:53' for instance
   * @param {number} seconds 
   * @returns string
   */
  formatChrono: (seconds) => {
    const unitMin = Math.floor((seconds / 60) % 10);
    const tenMin = Math.floor(seconds / 600);

    const unitSec = Math.floor((seconds % 60) % 10);
    const tenSec = Math.floor((seconds % 60) / 10);
    
    const tenth = Math.floor((((seconds % 60) % 10) * 10) % 10);

    return `${tenMin}${unitMin}:${tenSec}${unitSec}:${tenth}`;
  },
  /**
   * Add and return all exercices duration in one round
   * @param {object} round, a list of exercices
   * @returns number
   */
  getRoundDuration: (round) => {
    let seconds = 0;
    
      round.exercices.forEach( exo => {
        seconds += (parseInt(exo.options[0].duration) * parseInt(exo.options[0].iteration))
      });
      
    return seconds;
  },
  /**
   * Add and return all durations of all exercices in every round of the training
   * @param {object} training, a list of rounds and exercices 
   * @returns number
   */
  getTrainingDuration: (training) => {
    
    let seconds = 0;
    
    training.rounds.forEach( round => {
      
      let exosSeconds = 0
      
      round.exercices.forEach( exo => {
        exosSeconds += (parseInt(exo.options[0].duration) * parseInt(exo.options[0].iteration))
      });
      
      seconds += exosSeconds * round.iteration;
      
    });
    
    return seconds;
  },
  /**
   * Move exercice between rounds when D&D between rounds, in CustomTrainingView
   * @param {object} rounds 
   * @param {object} action - {
      oldRoundIndex,
      newRoundIndex,
      oldIndex,
      newIndex
    }
   * @returns modified rounds
   */
  changeExoOrder : (rounds, action) => {
        
    const {
      oldRoundIndex,
      newRoundIndex,
      oldIndex,
      newIndex
    } = action.value;
    
    // Récupérer la liste d'exo qui perd l'exo
    const exeListLosingExo = rounds.find(round => round === rounds[oldRoundIndex]).exercices;
    
    // Récupérer l'exo à bouger et le sortir de sa liste
    const [exoToMove] = exeListLosingExo.splice(oldIndex, 1);
    
    // Récupérer la liste d'exo du round qui reçoit l'exo
    const exoListReceivingExo = rounds.find(round => round === rounds[newRoundIndex]).exercices;

    // Ajouter l'exo dans ce round à sa place
    exoListReceivingExo.splice(newIndex, 0, exoToMove);

    // Replacer la liste d'exo dans le round qui a perdu un exo
    rounds[oldRoundIndex].exercices = exeListLosingExo;
    
    // Remplacer le round qui a gagner un exo
    rounds[newRoundIndex].exercices = exoListReceivingExo;
    
    return rounds;
  },
  /**
   * Create a readable timeline from a training, the timeline is used in ReadTrainingView
   * @param {object} training 
   * @returns timeline - a list of exercices
   */
  getTimeLine: (training) => {
    
    const exoList = [{
      beginning: true},
      {
      name: 'READY ?',
      reps: '',
      duration: 5,
      weight: '',
      description: 'Play pour commencer',
      serieIndex: '',
      serieCount: '',
    }];
    
    for (let index = 0; index < training.rounds.length; index++) {
      // A chaque round
      for (let indexRoundIteration = 0; indexRoundIteration < training.rounds[index].iteration; indexRoundIteration++ ) {
        // A chaque iteration de chaque round
        for (let indexExo = 0; indexExo < training.rounds[index].exercices.length; indexExo++ ) {
          // A chaque exo de chaque round
          for (let indexSerie = 0; indexSerie < training.rounds[index].exercices[indexExo].options[0].iteration; indexSerie++) {
            // a chaque série de chaque exo de chaque iteration de chaque round
            exoList.push({
              roundIndex: index + 1,
              roundCount: training.rounds.length,
              roundDuration: trainingServices.getRoundDuration(training.rounds[index]),
              name: training.rounds[index].exercices[indexExo].name,
              reps: +training.rounds[index].exercices[indexExo].options[0].reps,
              duration: +training.rounds[index].exercices[indexExo].options[0].duration,
              weight: +training.rounds[index].exercices[indexExo].options[0].weight,
              description: training.rounds[index].exercices[indexExo].description,
              serieIndex: indexSerie + 1,
              serieCount: +training.rounds[index].exercices[indexExo].options[0].iteration,
            })
          }
        }        
      }
    }
    
    exoList.push({
      name: 'Fini, bien joué !',
      reps: '',
      duration: 0,
      weight: '',
      description: '',
      serieIndex: '',
      serieCount: '',
    });
    
    exoList.push({
      end: true,
      name: '',
    })
    console.log(exoList);
    return exoList;
  },
  
  getRemainingDuration: (timeline, indexTimeline) => {
    let seconds = 0;
    for (let index = indexTimeline; index < timeline.length; index++) {
      
      if (timeline[index].duration) seconds += timeline[index].duration;
    }
    return seconds;
  }
}

export default trainingServices;