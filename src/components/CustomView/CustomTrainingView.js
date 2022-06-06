/*-------------------------------------------*/
import AppNav from "../AppNav/AppNav";
import CustomTrainingManagerContainer from "../../containers/CustomTrainingManagerContainer";
import TrainingSortable from "./TrainingSortable/TrainingSortable";

const CustomTrainingView = ({
  localTraining,
  isToRender,
  moveRoundInState,
}) => {
  return (
    <section className="training__container">
      <AppNav />
      <CustomTrainingManagerContainer />
      <TrainingSortable
        isToRender={isToRender}
        name={localTraining.name}
        rounds={localTraining.rounds}
        moveRoundInState={moveRoundInState}
      />
    </section>
  );
};

export default CustomTrainingView;
