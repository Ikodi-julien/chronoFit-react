import Sortable from 'sortablejs';
import { useEffect } from 'react';

import ExoInList from '../../../containers/ExoInListContainer';
import ExoForm from '../../../containers/ExoFormContainer';
import RoundMenuContainer from '../../../containers/RoundMenuContainer';

import './round.scss';

const Round = ({
  isToRender,
  isAPI,
  // Pour Round
  roundIndex,
  iteration,
  shrunken,
  setShrunken,
  exercices,
  setRoundIteration,
  moveExoInState,
  menuIsVisible,
  // Pour RoundMenu
  addExercice,
  setRoundMenuIsVisible,
}) => {

  const handleChange = (evt) => setRoundIteration(roundIndex, evt.target.value)
  /*-----------------------------------*/
  let duration = 0;
  
  exercices.forEach(exo => duration += parseInt(exo.options[0].duration) * (exo.options[0].iteration ? parseInt(exo.options[0].iteration) : 1));
  
  duration = `${Math.floor(duration/60)}mn ${duration % 60}s`;
  /*--------------------------------*/
  useEffect(() => {
    if (!isAPI) {
      const exoList = document.getElementById(`exoList-${roundIndex}`);
    
      // D&D enabled only if no exercice being edited
      const sortable = Sortable.create(exoList, 
      {
        group: {name: 'exoList', pull: true, put: ['exoList'] },
        dataIdAttr: 'exo-id',
        draggable: '.draggable-item',
        onAdd: (evt) => {
        // Threw an error and needed to put back the item in place after item was dragged between list, react will render the state then.
          evt.from.insertBefore(evt.item, null); 
        },
        onEnd: (evt) => {
            // dispatch
            moveExoInState(
              {
                oldRoundIndex: parseInt(evt.from.id.substr(8,1)),
                newRoundIndex: parseInt(evt.to.id.substr(8,1)),
                oldIndex: evt.oldIndex,
                newIndex: evt.newIndex,
              }
            );
          },
      });

      const order = sortable.toArray().sort((a, b) => a - b);
      sortable.sort(order, false);
    }
  })
  
  return (
    <section className="rounds__round__container">
      <div className="rounds__round__header drag-handle">
        {
          menuIsVisible && <RoundMenuContainer index={roundIndex} />
        }
        { !isAPI &&
          <button 
          className="training__button --transparent --icone"
          onClick={() => setRoundMenuIsVisible(roundIndex, true)}
        >
          <i className="fas fa-ellipsis-v trainingrounds__header__togglemenu" ></i>
        </button>
        }
        { !isAPI &&
        <button 
          className="training__button --transparent --icone"
          onClick={() => addExercice(roundIndex)}
        >
          <i className="fas fa-plus"></i>
        </button>
        }
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
        
        <button 
          className={`training__button --transparent --icone --xl ${shrunken ? "--shrunken" : '--rotate'}`}
          onClick={() => setShrunken(roundIndex, !shrunken)}
        >
          <i className="fas fa-caret-right"></i>
        </button>
      </div>
      
      <ul 
        className={shrunken && exercices.length > 2 ? "rounds__round__exolist --shrunken" : "rounds__round__exolist"} 
        id={`exoList-${roundIndex}`}
      >
        {
          exercices.map((exo, index) => (
            exo.isForm ?
            <li key={index} exo-id={index}>
              <ExoForm
                roundIndex={roundIndex}
                index={index}
              />
            </li>
            :
            <li key={index} exo-id={index} className="draggable-item">
              <ExoInList
                isAPI={isAPI || false}
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