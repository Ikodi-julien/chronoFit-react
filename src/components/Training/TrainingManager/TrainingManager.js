import {useEffect} from 'react';
import './trainingmanager.scss';

const TrainingManager = ({list, getTrainings, setTrainingId}) => {
  
  const handleSelectChange = (evt) => setTrainingId(evt.target.value);
  
  useEffect(() => {getTrainings()}, []);
  
  return (
    <div className="trainingmanager__container">
        <form>
        
          <div className="trainingmanager__col">
            
            <select
              name="trainings"
              onChange={handleSelectChange}
              className="trainingmanager__col__select"
            >
              <option value="">Choisir un entrainement </option>
            {
              list.map((name, index) => (
                <option key={name.id} value={name.id}>{name.name}</option>
              ))
            }
            </select>
            <input
              type="text"
              className="trainingmanager__col__input"
              placeholder="Nom de l'entrainement"
              />
          </div>
          
          <div className="trainingmanager__row">
            <button type="submit" className="trainingmanager__row__button training__button">
              Save
            </button>
            <button type="submit" className="trainingmanager__row__button training__button">
              Delete
            </button>
          </div>
          
        </form>
    </div>
  )
}
export default TrainingManager;