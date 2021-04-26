import TrainingManager from './TrainingManager/TrainingManager';
import TrainingForm from './TrainingForm/TrainingForm';
import TrainingExoList from './TrainingExoList/TrainingExoList';
import AppNav from '../AppNav/AppNav';

import './training.scss';

const Training = () => {
  
  return (
  <section className="training__container">
    {/* Ici le component AppHeader */}
    <AppNav />
    {/* Ici le component TrainingManager */}
    <TrainingManager />
    {/* Ici le component TrainingExoList */}
    <TrainingExoList />
    {/* Ici le component TrainingForm */}
    <TrainingForm />
  </section>
)};

export default Training;