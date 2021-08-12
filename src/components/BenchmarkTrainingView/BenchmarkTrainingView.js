/*-------------------------------------------*/
import AppNav from '../../containers/AppNavContainer';
import TrainingManager from './TrainingManager/TrainingManager';
import TrainingAPI from './Training/TrainingAPI';

import './trainingview.scss';

const BenchmarkTrainingView = ({path, allTrainings, setTrainingId, currentTrainingId, getTrainings, currentTraining, getCurrentTraining }) => {

  return (
  <section className="training__container">
    <AppNav />
    <TrainingManager 
      path={path}
      list={allTrainings} 
      getTrainings={getTrainings}
      setTrainingId={setTrainingId}
      />
    <TrainingAPI
      id={currentTrainingId} 
      rounds={currentTraining.rounds} 
      getCurrentTraining={getCurrentTraining}
      />
  </section>
)};

export default BenchmarkTrainingView;