import Sortable from 'sortablejs';
import { useEffect } from 'react';

import ExoInList from '../../../containers/ExoInListContainer';
import ExoForm from '../../../containers/ExoFormContainer';
import RoundMenu from './RoundMenu';

import './round.scss';

const Round = ({
  // Pour Round
  isToRender,
  roundIndex,
  iteration,
  shrunken,
  exercices,
  setRoundIteration,
  menuIsVisible,
  // Pour RoundMenu
  addRound,
  addExercice,
  deleteRound,
  setRoundMenuIsVisible,
}) => {

  const handleChange = (evt) => setRoundIteration(roundIndex, evt.target.value)
  let duration = 0;
  exercices.forEach(exo => duration += parseInt(exo.options[0].duration) * (exo.options[0].iteration ? parseInt(exo.options[0].iteration) : 1));
  
  if (duration > 60) duration = `${Math.floor(duration/60)}mn ${duration % 60}s`;
  
  useEffect(() => {
    const exoList = document.getElementById(`exoList-${roundIndex}`);
    Sortable.create(exoList, {group: {name: 'exoList', pull: true, put: true }});
  })
  
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
        
        <div className="rounds__round__header__column">
          <div className="rounds__round__header__title">Round n°{roundIndex + 1} </div>
          <div className="rounds__round__header__subtitle">Durée : {duration} - Répéter
            <input
              name="roundIteration"
              type={"number"}
              value={iteration}
              className="rounds__round__iteration"
              onChange={handleChange}
            /> fois</div>
        </div>
        
        <button className="training__button --transparent --icone --xl">
          <i className="fas fa-caret-right"></i>
        </button>
      </div>
      
      <ul className="rounds__round__exolist" id={`exoList-${roundIndex}`}>
        {
          exercices.map((exo, index) => (
            exo.isForm ?
            <li key={index}>
              <ExoForm
                roundIndex={roundIndex}
                index={index}
              />
            </li>
            :
            <li key={index}>
              <ExoInList
                roundIndex={roundIndex}
                index={index}
              />
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Round;