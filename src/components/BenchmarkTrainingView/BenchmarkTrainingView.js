/*-------------------------------------------*/
import AppNav from '../../containers/AppNavContainer';
import TrainingManager from './TrainingManager/TrainingManager';
import TrainingAPIContainer from '../../containers/trainingAPIContainer';

const BenchmarkTrainingView = (
  {
    allTrainings, 
    getTrainings, 
    setTrainingId, 
    getCurrentTraining
   }) => {

  return (
  <section className="training__container">
    <AppNav />
    <TrainingManager 
      list={allTrainings} 
      getTrainings={getTrainings}
      setTrainingId={setTrainingId}
      getCurrentTraining={getCurrentTraining}
      />
    <TrainingAPIContainer />
  </section>
)};

export default BenchmarkTrainingView;