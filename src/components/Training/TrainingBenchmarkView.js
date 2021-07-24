/*-------------------------------------------*/
import AppNav from '../../containers/AppNavContainer';
import TrainingManager from './TrainingManager/TrainingManager';
import Training from './Training/Training';

import './trainingview.scss';

const TrainingBenchmarkView = ({path, allTrainings, setTrainingId, currentTrainingId, getTrainings, currentTraining, getCurrentTraining }) => {

  return (
  <section className="training__container">
    <AppNav />
    <TrainingManager 
      path={path}
      list={allTrainings} 
      getTrainings={getTrainings}
      setTrainingId={setTrainingId}
      />
    <Training
      id={currentTrainingId} 
      rounds={currentTraining.rounds} 
      getCurrentTraining={getCurrentTraining}
      />
  </section>
)};

export default TrainingBenchmarkView;