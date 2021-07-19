import { useEffect } from 'react';
/*-------------------------------------------*/
import AppNav from '../../containers/AppNavContainer';
import TrainingManager from './TrainingManager/TrainingManager';
import Training from './Training/Training';

import './trainingview.scss';

const TrainingView = ({allTrainings, setTrainingId, currentTrainingId, getTrainings, currentTraining, getCurrentTraining }) => {

  return (
  <section className="training__container">
    <AppNav />
    <TrainingManager 
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

export default TrainingView;