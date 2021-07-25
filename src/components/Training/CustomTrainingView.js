/*-------------------------------------------*/
import AppNav from '../../containers/AppNavContainer';
import CustomTrainingManagerContainer from '../../containers/CustomTrainingManagerContainer';
import Training from './Training/Training';

import './trainingview.scss';

const CustomTrainingView = ({ localTraining, getCurrentTraining }) => {

  return (
  <section className="training__container">
    <AppNav />
    <CustomTrainingManagerContainer />
    <Training
      id={localTraining.id} 
      rounds={localTraining.rounds} 
      // getCurrentTraining={getCurrentTraining}
      />
  </section>
)};

export default CustomTrainingView;