import {useEffect} from 'react';
import './trainingmanager.scss';

const TrainingManager = ({path, list, getTrainings, setTrainingId}) => {
  
  const handleSelectChange = (evt) => setTrainingId(evt.target.value);
  
  useEffect(() => {getTrainings()}, [getTrainings]);

  return (
    <div className="trainingmanager__container">
        <h1 className="trainingmanager__title">
          {path === "/benchmark_training" ? "Benchmarks Trainings" : "Custom Trainings"}
        </h1>
        <form>
        
          <div className="trainingmanager__col">
            
            <select
              name="trainings"
              onChange={handleSelectChange}
              className="trainingmanager__col__select"
            >
              <option value="">Work Of Day</option>
            {
              list.map((name, index) => (
                <option key={name.id} value={name.id}>{name.name}</option>
              ))
            }
            </select>
            {
            path === "/custom_training" ?
            <input
              type="text"
              className="trainingmanager__col__input"
              placeholder="Nom de l'entrainement"
              /> : null
            }
          </div>
          
          {
            path === "/custom_training" ?
            <div className="trainingmanager__row">
              <button type="submit" className="trainingmanager__row__button training__button">
                Save
              </button>
              <button type="submit" className="trainingmanager__row__button training__button">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
            : null
          }

          
        </form>
    </div>
  )
}
export default TrainingManager;