import ExoTabLineContainer from "../../containers/ExoTabLineContainer";

const ExoTab = ({ training, setValue, isModif }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Exo</th>
          <th>Description</th>
          <th>Temps</th>
          <th>Reps</th>
          <th>Poids</th>
          {isModif && <th>Suppr.</th>}
        </tr>
      </thead>
      <tbody>
        {training.map((exo, index) => {
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
