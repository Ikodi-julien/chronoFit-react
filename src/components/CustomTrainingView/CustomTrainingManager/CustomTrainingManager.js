import CTMForm from './CTMForm';
import CTMOptionsContainer from '../../../containers/CTMOptionsContainer';

import './customtrainingmanager.scss';

const CustomTrainingManager = (
  {
    trainingList, 
    training,
    trainingName,
    getLocalTrainings,
    setLocalTraining, 
    setLocalTrainingName,
    createLocalTraining,
    deleteLocalTraining,
  }) => {
  
  return (
    <div className="trainingmanager__container">
      <CTMForm 
        training={training}
        trainingName={trainingName}
        trainingList={trainingList}
        setLocalTraining={setLocalTraining}
        setLocalTrainingName={setLocalTrainingName}
        createLocalTraining={createLocalTraining}
        deleteLocalTraining={deleteLocalTraining}
        getLocalTrainings={getLocalTrainings}
      />
      <CTMOptionsContainer />
    </div>
  )
}
export default CustomTrainingManager;