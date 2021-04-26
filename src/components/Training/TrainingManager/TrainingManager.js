import './trainingmanager.scss';

const TrainingManager = (props) => {
  
  return (
    <div className="trainingmanager__container">
        <form>
        
          <div className="trainingmanager__col">
            
            <select
              name="trainings"
              className="trainingmanager__col__select"
            >
              <option value="">Choisir un entrainement</option>
              <option value="test">Test</option>
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