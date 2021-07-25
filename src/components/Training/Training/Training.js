import { useEffect } from 'react';
/*------------------------------*/
import Round from '../Round/Round';

import './training.scss';

const Training = ({id, rounds, getCurrentTraining}) => {

  // useEffect(() => {
  //   if (id !== 0) getCurrentTraining(id);
  // }, [getCurrentTraining, id]);
  
  return (
    <section className="trainingrounds__container">

      {
        id !== 0 ? 
          (rounds ? rounds.map((round, index) => (
            <Round 
              key={index}
              index={index}
              duration={round.duration}
              iteration={round.iteration}
              shrunken={round.isShrunken}
              exercices={round.exercices}
            />
          )) : null)
        : null
      }
    </section>
  )
}

export default Training;