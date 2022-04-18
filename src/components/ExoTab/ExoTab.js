import ExoTabLineContainer from "../../containers/ExoTabLineContainer";

const ExoTab = ({ trainingRecord, setValue, isModif }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Exo</th>
          <th>Description</th>
          <th>Temps</th>
          <th>Reps</th>
          <th>Poids</th>
        </tr>
      </thead>
      <tbody>
        {trainingRecord.map((exo, index) => {
          return (
            <ExoTabLineContainer
              key={index}
              index={index}
              isModif={isModif}
              setValue={setValue}
            />
          );
        })}
      </tbody>
    </table>
  );
};
export default ExoTab;
