/*-------------------------------------------*/
import AppNav from "../AppNav/AppNav";
import CustomTrainingManagerContainer from "../../containers/CustomTrainingManagerContainer";
import TrainingLocal from "./TrainingLocal/TrainingLocal";

const CustomTrainingView = ({
  localTraining,
  isToRender,
  moveRoundInState,
}) => {
  return (
    <section className="training__container">
      <AppNav />
      <CustomTrainingManagerContainer />
      <TrainingLocal
        isToRender={isToRender}
        name={localTraining.name}
        rounds={localTraining.rounds}
        moveRoundInState={moveRoundInState}
      />
    </section>
  );
};

export default CustomTrainingView;
