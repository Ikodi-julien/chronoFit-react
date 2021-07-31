import Round from '../Round/Round';
import './trainingrounds.scss';

const Training = ({name, rounds, addRound, addExercice, deleteRound, setRoundMenuIsVisible, setRoundIteration}) => {

  return (
    <section className="trainingrounds__container">
      {
        name !== "" ? 
          (rounds ? rounds.map((round, index) => (
            <Round 
              key={index}
              index={index}
              duration={round.duration}
              iteration={round.iteration}
              shrunken={round.isShrunken}
              exercices={round.exercices}
              addRound={addRound}
              addExercice={addExercice}
              deleteRound={deleteRound}
              menuIsVisible={round.menuIsVisible}
              setRoundMenuIsVisible={setRoundMenuIsVisible}
              setRoundIteration={setRoundIteration}
            />
          )) : null)
        : null
      }
    </section>
  )
}

export default Training;