import TrainingTabLineContainer from "../../containers/TrainingTabLineContainer";

const TrainingTab = ({ trainings, sortTrainingTab, typeValue, typeList }) => {
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
              style={{ width: "4rem" }}
            >
              <option value="all">TOUS</option>
              {typeList?.length &&
                typeList.map((type) => <option value={type}>{type}</option>)}
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
