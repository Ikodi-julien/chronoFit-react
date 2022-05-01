import { useEffect } from "react";
import AppNav from "../AppNav/AppNav";
import RecapTrainingModalContainer from "../../containers/RecapTrainingModalContainer";
import TrainingTabContainer from "../../containers/TrainingTabContainer";

const RecapTrainingsView = ({ getTrainingsDone }) => {
  // eslint-disable-next-line
  useEffect(() => getTrainingsDone(), []);

  return (
    <section className="training__container">
      <AppNav />
      {/* // TODO ajouter possibilité d'affichage entre deux dates */}
      <RecapTrainingModalContainer />
      <TrainingTabContainer />
    </section>
  );
};
export default RecapTrainingsView;
