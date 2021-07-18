import AppNav from '../../containers/AppNavContainer';
import TrainingManager from './TrainingManager/TrainingManager';
import TrainingRounds from '../../containers/TrainingRoundsContainer';

import './training.scss';

const Training = () => {
  
  return (
  <section className="training__container">
    <AppNav />
    <TrainingManager />
    <TrainingRounds />
  </section>
)};

export default Training;