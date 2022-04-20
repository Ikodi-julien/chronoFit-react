import TrainingTabLine from "./TrainingTabLine/TrainingTabLine";
// import fakeTrainings from "./fakeTrainings";

const TrainingTab = ({ recapTrainings }) => {
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
        {recapTrainings.map((training, index) => {
          return <TrainingTabLine key={index} training={training} />;
        })}
      </tbody>
    </table>
  );
};
export default TrainingTab;
