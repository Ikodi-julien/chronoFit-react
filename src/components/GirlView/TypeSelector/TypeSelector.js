import { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './typeselector.scss';

const TypeSelector = ({getGirls, setTypeSelected, getGirlsSuccess}) => {
    
  useEffect(() => {
    getGirls();
  }, [getGirls])
  
  return (
    <div className="training__typeselector">
      <p>Selectionner un type de WOD:</p>

      {
        getGirlsSuccess ?
        
        <div 
          className="training__typeselector__row"
          onChange={(evt) => setTypeSelected(evt.target.value)}
        >
          <div className="training__typeselector__item">
            <label htmlFor="all">TOUS</label>
            <input type="radio" id="all" name="trainingType" value="all" />
          </div>
          <div className="training__typeselector__item">
            <label htmlFor="ft">FOR TIME</label>
            <input type="radio" id="ft" name="trainingType" value="ft" />
          </div>
          <div className="training__typeselector__item">
            <label htmlFor="amrap">AMRAP</label>
            <input type="radio" id="amrap" name="trainingType" value="amrap" />
          </div>
          <div className="training__typeselector__item">
            <label htmlFor="emom">EMOM</label>
            <input type="radio" id="emom" name="trainingType" value="emom" />
          </div>
          
          <div className="training__typeselector__item">
            <label htmlFor="maxreps">MAX REPS</label>
            <input type="radio" id="maxreps" name="trainingType" value="maxreps" />
          </div>
        </div>
      :
        <div className="training__typeselector__loadercontainer">
          <CircularProgress color={'inherit'}/>
        </div>
      }
      
    </div>
  )
}
export default TypeSelector;