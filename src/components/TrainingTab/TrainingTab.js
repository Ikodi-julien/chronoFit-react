import TrainingTabLineContainer from "../../containers/TrainingTabLineContainer";

const TrainingTab = ({ trainings, sortTrainingTab, typeValue }) => {
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
          <th style={{ cursor: "pointer" }}>
            <select
              name="type"
              onChange={(evt) => sortTrainingTab(evt.target.value)}
              value={typeValue}
            >
              <option value="none">Choix du type</option>
              <option value="FOR TIME">FOR TIME</option>
              <option value="EMOM">EMOM</option>
              <option value="AMRAP">AMRAP</option>
              <option value="MAX REPS">MAX REPS</option>
            </select>
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
