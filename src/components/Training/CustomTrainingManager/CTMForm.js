/* eslint-disable import/no-anonymous-default-export */
import {useEffect} from 'react';

export default (
  {
    props
  }) => {
    const {
      training, 
      trainingName,
      trainingList,
      setLocalTraining,
      setLocalTrainingName,
      createLocalTraining,
      deleteLocalTraining,
      getLocalTrainings
    } = props;
    
    const handleClick = (evt) => {
      evt.target.name === "saveTraining" ? createLocalTraining() : deleteLocalTraining();
    }
      
    const handleSelectChange = (evt) => setLocalTraining(evt.target.value);
    
    useEffect(() => {getLocalTrainings()}, [getLocalTrainings]);
    
    return (
      <form onSubmit={(evt) => evt.preventDefault() }>
      
        <div className="trainingmanager__col">
          
          <select
            name="trainings"
            onChange={handleSelectChange}
            value={training.name}
            className="trainingmanager__col__select"
          >
            <option value="default">Work Of Day</option>
          {
            trainingList.map((training, index) => (
              <option
                key={training.name} 
                value={training.name}
                // selected={training.name === localTraining.name}
                >{training.name}</option>
            ))
          }
          </select>
          <input
            type="text"
            value={trainingName}
            onChange={(evt => setLocalTrainingName(evt.target.value))}
            className="trainingmanager__col__input"
            placeholder="Nom du nouvel entrainement"
            />
        </div>
        
        <div className="trainingmanager__row">
          <button 
            name="saveTraining"
            type="submit" 
            onClick={handleClick}
            className="trainingmanager__row__button training__button"
          >
            Save
          </button>
          <button 
            name="deleteTraining"
            type="submit" 
            onClick={handleClick}
            className="trainingmanager__row__button training__button">
            Delete
          </button>
        </div>
      </form>
    )
}