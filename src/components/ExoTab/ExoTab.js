import ExoTabLine from "../ExoTab/ExoTabLine/ExoTabLine";

const ExoTab = ({ isModif, exos, setValue, deleteExo }) => {
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
        {exos.map((exo, index) => (
          <ExoTabLine
            key={index}
            index={index}
            isModif={isModif}
            exo={exo}
            setValue={setValue}
            deleteExo={deleteExo}
          />
        ))}
      </tbody>
    </table>
  );
};
export default ExoTab;
