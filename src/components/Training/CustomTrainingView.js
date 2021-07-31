/*-------------------------------------------*/
import AppNav from '../../containers/AppNavContainer';
import CustomTrainingManagerContainer from '../../containers/CustomTrainingManagerContainer';
import Training from './Training/Training';

import './trainingview.scss';

const CustomTrainingView = ({ localTraining, addRoundToLocalTraining, addExerciceToLocalTraining, deleteRoundFromLocalTraining, setRoundMenuIsVisible, setRoundIteration }) => {

  return (
  <section className="training__container">
    <AppNav />
    <CustomTrainingManagerContainer />
    <Training
      name={localTraining.name} 
      rounds={localTraining.rounds} 
      addRound={addRoundToLocalTraining}
      addExercice={addExerciceToLocalTraining}
      deleteRound={deleteRoundFromLocalTraining}
      setRoundMenuIsVisible={setRoundMenuIsVisible}
      setRoundIteration={setRoundIteration}
      />
  </section>
)};

export default CustomTrainingView;