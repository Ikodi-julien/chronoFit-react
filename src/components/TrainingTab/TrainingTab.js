import TrainingTabLineContainer from "../../containers/TrainingTabLineContainer";
// import fakeTrainings from "./fakeTrainings";

const TrainingTab = ({ trainings }) => {
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
          return <TrainingTabLineContainer key={index} training={training} />;
        })}
      </tbody>
    </table>
  );
};
export default TrainingTab;
