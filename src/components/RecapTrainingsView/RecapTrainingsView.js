import { useEffect } from "react";
import AppNav from "../AppNav/AppNav";
import RecapTrainingModalContainer from "../../containers/RecapTrainingModalContainer";
import TrainingTab from "../TrainingTab/TrainingTab";

const RecapTrainingsView = ({ trainings, getTrainingsDone }) => {
  // eslint-disable-next-line
  useEffect(() => getTrainingsDone(), []);

  return (
    <section className="training__container">
      <AppNav />
      {/* // TODO ajouter possibilité d'affichage entre deux dates */}
      <RecapTrainingModalContainer />
      <TrainingTab trainings={trainings} />
    </section>
  );
};
export default RecapTrainingsView;
