import AppNav from "../AppNav/AppNav";
import TrainingTab from "../TrainingTab/TrainingTab";

const RecapTrainingsView = () => {
  return (
    <section className="training__container">
      <AppNav />
      {/* // TODO ajouter possibilité d'affichage entre deux dates */}
      <TrainingTab />
    </section>
  );
};
export default RecapTrainingsView;
