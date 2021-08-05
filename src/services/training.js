/* eslint-disable import/no-anonymous-default-export */
export default {
  getTotalTime: (training) => {
    
    let seconds = 0;
    
    training.rounds.forEach( round => {
      
      let exosSeconds = 0
      
      round.exercices.forEach( exo => {
        exosSeconds += (parseInt(exo.options[0].duration) * parseInt(exo.options[0].iteration))
      });
      
      seconds += exosSeconds * round.iteration;
      
    });
    
    return `${Math.floor(seconds / 60)}mn ${seconds % 60}s`;
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
    
    console.log(rounds);
    return rounds;
  }
}