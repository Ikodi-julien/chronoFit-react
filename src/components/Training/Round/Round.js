import ExoInList from '../ExoInList/ExoInList';
import ExoForm from '../../../containers/ExoFormContainer';
import RoundMenu from './RoundMenu';

import './round.scss';

const Round = ({
  roundIndex,
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
  showExoInList,
  showExoForm
}) => {

  const handleChange = (evt) => setRoundIteration(roundIndex, evt.target.value)
  
  return (
    <section className="rounds__round__container">
      <div className="rounds__round__header">
        {
          menuIsVisible ? <RoundMenu 
                            index={roundIndex}
                            addRound={addRound}
                            addExercice={addExercice}
                            deleteRound={deleteRound}
                            setRoundMenuIsVisible={setRoundMenuIsVisible}
                            /> : null
        }
        <button className="training__button --transparent --icone">
          <i className="fas fa-ellipsis-v trainingrounds__header__togglemenu" onClick={() => setRoundMenuIsVisible(roundIndex, true)}></i>
        </button>
        <span className="rounds__round__header__title">Round n°{roundIndex + 1} - Durée : {duration}s - Nombre : 
          <input
            name="roundIteration" 
            type={"number"} 
            value={iteration} 
            className="rounds__round__iteration"
            onChange={handleChange}
          /></span>
        <button className="training__button --transparent --icone --xl">
          <i className="fas fa-caret-right"></i>
        </button>
      </div>
      {
        exercices.map((exo, index) => (
          exo.isForm ? 
          <ExoForm
            key={index}
            roundIndex={roundIndex}
            index={index}
            name={exo.name}
            description={exo.description}
            duration={exo.options[0].duration}
            reps={exo.options[0].reps}
            weight={exo.options[0].weight}
            showExoInList={showExoInList}
          />
          :
          <ExoInList
            key={index}
            roundIndex={roundIndex}
            index={index}
            name={exo.name}
            description={exo.description}
            duration={exo.options[0].duration}
            reps={exo.options[0].reps}
            weight={exo.options[0].weight}
            showExoForm={showExoForm}
          />
        ))
      }

    </section>
  )
}

export default Round;