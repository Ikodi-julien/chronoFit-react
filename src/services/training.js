/* eslint-disable import/no-anonymous-default-export */
export default {
  getTotalTime: (training) => {
    
    let seconds = 0;
    
    training.rounds.forEach( round => {
      round.exercices.forEach( exo => seconds += exo.options[0].duration );
    });
    
    return `${Math.floor(seconds / 60)}mn ${seconds % 60}`;
  }
}