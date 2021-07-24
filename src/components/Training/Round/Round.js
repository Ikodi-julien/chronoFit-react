import ExoInListContainer from '../ExoInList/ExoInList';

import './round.scss';

const Round = ({
  index,
  duration,
  iteration,
  shrunken,
  exercices,
}) => {

  return (
    <section className="trainingexolist__container">
      <div className="trainingrounds__header">
        <i className="fas fa-ellipsis-v"></i>
        <span>n°{index + 1} - durée : {duration} - {iteration} rounds:</span>
        <i className="fas fa-caret-right"></i>
      </div>
      {
        exercices.map((exo, index) => (
          <ExoInListContainer 
            key={index}
            index={index}
            name={exo.name}
            description={exo.description}
            duration={exo.options[0].duration}
            reps={exo.options[0].reps}
            weight={exo.options[0].weight}
            menuIsVisible={exo.menuIsVisible}
          />
        ))
      }

    </section>
  )
}

export default Round;