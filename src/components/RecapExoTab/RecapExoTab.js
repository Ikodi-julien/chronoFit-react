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
        </tr>
      </thead>
      <tbody>
        {training.exos.map((exo, index) => {
          return <RecapExoTabLine key={index} exo={exo} />;
        })}
      </tbody>
    </table>
  );
};
export default RecapExoTab;
