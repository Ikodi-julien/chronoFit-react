import TrainingTabLineContainer from "../../containers/TrainingTabLineContainer";

const TrainingTab = ({ trainings, sortTrainingTab }) => {
  return (
    <table>
      <thead>
        <tr>
          <th
            onClick={() => sortTrainingTab("date")}
            style={{ cursor: "pointer" }}
          >
            Date <i className="fas fa-sort"></i>
          </th>
          <th
            onClick={() => sortTrainingTab("name")}
            style={{ cursor: "pointer" }}
          >
            Nom <i className="fas fa-sort"></i>
          </th>
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
