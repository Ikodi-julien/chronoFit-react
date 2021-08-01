import {useEffect} from 'react';
import Sortable from 'sortablejs';
import RoundLocalContainer from '../../../containers/RoundLocalContainer';

const TrainingLocal = (
  {
    name, 
    rounds,
    moveRoundInState,
  }) => {

  useEffect(() => {
    const roundList = document.getElementById('roundList');
    const sortable = Sortable.create(roundList, 
      {
        // group allows to D&D between lists with the same name
        group: {name:'roundList', pull: false, put: false},
        // This is used to sort items after state is updated
        dataIdAttr: 'data-id',
        // On déplace le rounds[oldIndex] à son nouvel index dans le state rounds[newIndex]
        onEnd: (evt) => {
          console.log(evt.oldIndex, evt.newIndex)
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
            name !== "" ?
              (rounds ? rounds.map((round, index) => (
                <li key={index} data-id={index}>
                  <RoundLocalContainer
                    round={round}
                    index={index}
                  />
                </li>
              )) : null)
            : null
          }
    </ul>
  )
}

export default TrainingLocal;