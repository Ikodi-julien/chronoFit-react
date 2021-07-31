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
  addExercice,
  deleteRound,
  setRoundMenuIsVisible,
  setRoundIteration,
  menuIsVisible,
}) => {

  const handleChange = (evt) => setRoundIteration(index, evt.target.value)
  
  return (
    <section className="trainingexolist__container">
      <div className="trainingrounds__header">
        {
          menuIsVisible ? <RoundMenu 
                            index={index}
                            addRound={addRound}
                            addExercice={addExercice}
                            deleteRound={deleteRound}
                            setRoundMenuIsVisible={setRoundMenuIsVisible}
                            /> : null
        }
        <i className="fas fa-ellipsis-v trainingrounds__header__togglemenu" onClick={() => setRoundMenuIsVisible(index, true)}></i>
        <span>Round n°{index + 1} - Durée : {duration}s - Nombre : 
          <input
            name="roundIteration" 
            type={"number"} 
            value={iteration} 
            className="trainingrounds__round__iteration"
            onChange={handleChange}
          /></span>
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