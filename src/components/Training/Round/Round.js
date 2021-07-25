import ExoInListContainer from '../ExoInList/ExoInList';
import RoundMenu from './RoundMenu';

import './round.scss';

const Round = ({
  index,
  duration,
  iteration,
  shrunken,
  exercices,
  addRound,
  deleteRound,
  setRoundMenuIsVisible,
  menuIsVisible,
}) => {

  return (
    <section className="trainingexolist__container">
      <div className="trainingrounds__header">
        {
          menuIsVisible ? <RoundMenu 
                                index={index}
                                addRound={addRound}
                                deleteRound={deleteRound}
                                setRoundMenuIsVisible={setRoundMenuIsVisible}
                                /> : null
        }
        <i className="fas fa-ellipsis-v" onClick={() => setRoundMenuIsVisible(index, true)}></i>
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