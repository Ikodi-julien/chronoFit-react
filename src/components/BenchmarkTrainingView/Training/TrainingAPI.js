import RoundAPIContainer from "../../../containers/RoundAPIContainer";

/* ATTENTION c'est une copie pas mise à jour !!! */
const TrainingAPI = (
  {
    rounds, 
  }) => {

  return (
    <section className="rounds__container">
      {
        rounds && rounds.map((round, index) => (
          <RoundAPIContainer 
            key={index}
            round={round}
            roundIndex={index}
            isAPI={true}
          />
        ))
      }
    </section>
  )
}

export default TrainingAPI;