import {useEffect} from 'react';
import Sortable from 'sortablejs';
import RoundLocalContainer from '../../../containers/RoundLocalContainer';

const TrainingLocal = (
  {
    isToRender,
    name, 
    rounds,
    moveRoundInState,
  }) => {

  useEffect(() => {
    const roundList = document.getElementById('roundList');
    const sortable = Sortable.create(roundList, 
      {
        // Drag handler, in Round header, allow drag only with round header.
        handle: ".drag-handle",
        // group allows to D&D between lists with the same name
        group: {name:'roundList', pull: true, put: ['roundList']},
        // This is used to sort items after state is updated
        dataIdAttr: 'data-id',
        disabled: false,
        // On déplace le rounds[oldIndex] à son nouvel index dans le state rounds[newIndex]
        onEnd: (evt) => {
          moveRoundInState(evt.oldIndex, evt.newIndex)
        }
      }
    );
    
    // The state is updated, roundIndex has changed, need to sort them according to new state.
    const order = sortable.toArray().sort();
    sortable.sort(order, false);
  })
    
  return (
    <ul className="rounds__container" id="roundList">
          {
            name !== "" &&
              (rounds && rounds.map((round, index) => (
                <li key={index} data-id={index}>
                  <RoundLocalContainer
                    round={round}
                    index={index}
                  />
                </li>
              )))
          }
    </ul>
  )
}

export default TrainingLocal;