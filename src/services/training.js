/* eslint-disable import/no-anonymous-default-export */
const trainingServices = {
  formatSeconds: (seconds) => `${Math.floor(seconds / 60)}mn ${seconds % 60}s`,
  
  getRoundDuration: (round) => {
    let seconds = 0;
    
      round.exercices.forEach( exo => {
        seconds += (parseInt(exo.options[0].duration) * parseInt(exo.options[0].iteration))
      });
      
    return seconds;
  },
  
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
  
  getTimeLine: (training) => {
    
    const exoList = [{beginning: true}];
    
    for (let index = 0; index < training.rounds.length; index++) {
      for (let indexExo = 0; indexExo < training.rounds[index].exercices.length; indexExo++ ) {
        for (let indexSerie = 0; indexSerie < training.rounds[index].exercices[indexExo].options[0].iteration; indexSerie++) {
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
    
    exoList.push({end: true});
    
    return exoList;
  }
}

export default trainingServices;