import { useEffect } from "react";
import AppNav from "../AppNav/AppNav";
import TrainingTab from "../TrainingTab/TrainingTab";

const RecapTrainingsView = ({ recapTrainings, getTrainingsDone }) => {
  // eslint-disable-next-line
  useEffect(() => getTrainingsDone(), []);

  return (
    <section className="training__container">
      <AppNav />
      {/* // TODO ajouter possibilité d'affichage entre deux dates */}
      <TrainingTab recapTrainings={recapTrainings} />
      <i className="fa-solid fa-circle-plus"></i>
    </section>
  );
};
export default RecapTrainingsView;
