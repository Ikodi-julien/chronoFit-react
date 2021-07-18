import ExoInListContainer from '../../../containers/ExoInListContainer';

const TrainingRounds = ({exoList}) => {
  console.log('exoList: ', exoList)
  return (
    <section className="trainingexolist__container">
      {
        exoList.map((exo, index) => (
          <ExoInListContainer 
            key={index}
            index={index}
            name={exo.name}
            description={exo.description}
            duration={exo.duration}
            reps={exo.reps}
            weight={exo.weight}
            menuIsVisible={exo.menuIsVisible}
          />
        ))
      }

    </section>
  )
}

export default TrainingRounds;