import {useEffect} from 'react';
import './trainingmanager.scss';

const TrainingManager = ({list, getTrainings, setTrainingId, getCurrentTraining}) => {
  
  const handleSelectChange = (evt) => {
    setTrainingId(evt.target.value);
    getCurrentTraining(evt.target.value);
  };
  
  useEffect(() => {getTrainings()}, [getTrainings]);

  return (
    <div className="trainingmanager__container">
        <h1 className="trainingmanager__title">
          Les Girls
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
          </div>
        </form>
    </div>
  )
}
export default TrainingManager;