import TrainingTabLineContainer from "../../containers/TrainingTabLineContainer";
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
          return <TrainingTabLineContainer key={index} training={training} />;
        })}
      </tbody>
    </table>
  );
};
export default TrainingTab;
