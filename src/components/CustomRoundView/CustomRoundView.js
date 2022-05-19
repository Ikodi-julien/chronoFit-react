import AppNav from "../AppNav/AppNav";
import CustomRoundManagerContainer from "../../containers/CustomRoundManagerContainer";
// import TrainingLocal from "./TrainingLocal/TrainingLocal";

const CustomRoundView = (
  {
    // localTraining,
    // isToRender,
    // moveRoundInState,
  }
) => {
  return (
    <section className="training__container">
      <AppNav />
      <CustomRoundManagerContainer />
      {/* <TrainingLocal
        isToRender={isToRender}
        name={localTraining.name}
        rounds={localTraining.rounds}
        moveRoundInState={moveRoundInState}
      /> */}
    </section>
  );
};

export default CustomRoundView;
