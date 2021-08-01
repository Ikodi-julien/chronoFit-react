/*-------------------------------------------*/
import AppNav from '../../containers/AppNavContainer';
import CustomTrainingManagerContainer from '../../containers/CustomTrainingManagerContainer';
import Training from './Training/Training';

import './trainingview.scss';

const CustomTrainingView = ({ localTraining, addRoundToLocalTraining, addExerciceToLocalTraining, deleteRoundFromLocalTraining, setRoundMenuIsVisible, setRoundIteration, showExoForm, showExoInList }) => {

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
      showExoForm={showExoForm}
      showExoInList={showExoInList}
      />
  </section>
)};

export default CustomTrainingView;