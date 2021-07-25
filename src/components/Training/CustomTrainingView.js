/*-------------------------------------------*/
import AppNav from '../../containers/AppNavContainer';
import CustomTrainingManagerContainer from '../../containers/CustomTrainingManagerContainer';
import Training from './Training/Training';

import './trainingview.scss';

const CustomTrainingView = ({ localTraining, addRoundToLocalTraining, deleteRoundFromLocalTraining, setRoundMenuIsVisible }) => {

  return (
  <section className="training__container">
    <AppNav />
    <CustomTrainingManagerContainer />
    <Training
      name={localTraining.name} 
      rounds={localTraining.rounds} 
      addRound={addRoundToLocalTraining}
      deleteRound={deleteRoundFromLocalTraining}
      setRoundMenuIsVisible={setRoundMenuIsVisible}
      />
  </section>
)};

export default CustomTrainingView;