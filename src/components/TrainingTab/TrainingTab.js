import TrainingTabLine from "./TrainingTabLine/TrainingTabLine";
import fakeTrainings from "./fakeTrainings";

const TrainingTab = () => {
  const trainings = fakeTrainings;
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Nom</th>
          <th>Détails</th>
        </tr>
      </thead>
      <tbody>
        {trainings.map((training, index) => {
          return <TrainingTabLine key={index} training={training} />;
        })}
      </tbody>
    </table>
  );
};
export default TrainingTab;
