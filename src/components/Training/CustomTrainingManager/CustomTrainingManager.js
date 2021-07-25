import {useEffect} from 'react';
import './customtrainingmanager.scss';

const CustomTrainingManager = ({
  list, 
  getLocalTrainings, 
  localTraining,
  localTrainingName, 
  setLocalTraining,
  setLocalTrainingName,
  createLocalTraining,
  deleteLocalTraining,
}) => {
  
  const handleSelectChange = (evt) => setLocalTraining(evt.target.value);
  const handleClick = (evt) => {
    evt.target.name === "saveTraining" ? createLocalTraining() : deleteLocalTraining();
  }
  
  useEffect(() => {getLocalTrainings()}, [getLocalTrainings]);

  return (
    <div className="trainingmanager__container">
        <form 
        onSubmit={(evt) => {
          evt.preventDefault();
          }
        }
        >
        
          <div className="trainingmanager__col">
            
            <select
              name="trainings"
              onChange={handleSelectChange}
              value={localTraining.name}
              className="trainingmanager__col__select"
            >
              <option value="default">Choisir un entrainement </option>
            {
              list.map((training, index) => (
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
              value={localTrainingName}
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
    </div>
  )
}
export default CustomTrainingManager;