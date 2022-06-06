import TrainingsDoneModalExoTabLine from "./TrainingsDoneModalExoTabLine/TrainingsDoneModalExoTabLine";

const TrainingsDoneModalExoTab = ({ training, isModif }) => {
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
          return (
            <TrainingsDoneModalExoTabLine
              key={index}
              exo={exo}
              isModif={isModif}
            />
          );
        })}
      </tbody>
    </table>
  );
};
export default TrainingsDoneModalExoTab;
