import Round from '../Round/Round';

const Training = ({name, rounds, addRound, addExercice, deleteRound, setRoundMenuIsVisible, setRoundIteration, showExoForm, showExoInList}) => {

  return (
    <section className="rounds__container">
      {
        name !== "" ? 
          (rounds ? rounds.map((round, index) => (
            <Round 
              key={index}
              roundIndex={index}
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
              showExoForm={showExoForm}
              showExoInList={showExoInList}
            />
          )) : null)
        : null
      }
    </section>
  )
}

export default Training;