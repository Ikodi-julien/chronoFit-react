/*-------------------------------------------*/
import AppNav from '../../containers/AppNavContainer';
import CustomTrainingManagerContainer from '../../containers/CustomTrainingManagerContainer';
import TrainingLocal from './Training/TrainingLocal';

import './trainingview.scss';

const CustomTrainingView = ({ localTraining, moveRoundInState }) => {

  return (
  <section className="training__container">
    <AppNav />
    <CustomTrainingManagerContainer />
    <TrainingLocal
      name={localTraining.name} 
      rounds={localTraining.rounds} 
      moveRoundInState={moveRoundInState}
      />
  </section>
)};

export default CustomTrainingView;