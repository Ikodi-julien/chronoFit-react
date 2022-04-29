import RecapExoTabLine from "./RecapExoTabLine/RecapExoTabLine";

const RecapExoTab = ({ training, isModif }) => {
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
        {training.exos.map((exo, index) => {
          return <RecapExoTabLine key={index} index={index} exo={exo} />;
        })}
      </tbody>
    </table>
  );
};
export default RecapExoTab;
