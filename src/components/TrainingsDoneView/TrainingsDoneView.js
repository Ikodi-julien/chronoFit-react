import { useEffect } from "react";
import AppNav from "../AppNav/AppNav";
import TrainingTabContainer from "../../containers/TrainingTabContainer";
import TrainingsDoneModalContainer from "../../containers/TrainingsDoneModalContainer";

const TrainingsDoneView = ({ getTrainingsDone }) => {
  // eslint-disable-next-line
  useEffect(() => getTrainingsDone(), []);

  return (
    <section className="training__container">
      <AppNav />
      {/* // TODO ajouter possibilité d'affichage entre deux dates */}
      <TrainingsDoneModalContainer />
      <TrainingTabContainer />
    </section>
  );
};
export default TrainingsDoneView;
