import RoundContainer from '../../../containers/RoundLocalContainer';

/* ATTENTION c'est une copie pas mise à jour !!! */
const TrainingAPI = (
  {
    name, 
    rounds, 
  }) => {

  return (
    <section className="rounds__container">
      {
        name !== "" ? 
          (rounds ? rounds.map((round, index) => (
            <RoundContainer 
              key={index}
              round={round}
              roundIndex={index}
            />
          )) : null)
        : null
      }
    </section>
  )
}

export default TrainingAPI;