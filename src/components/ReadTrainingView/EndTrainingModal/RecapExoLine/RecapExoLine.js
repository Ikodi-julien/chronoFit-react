const RecapExoLine = ({ exo, isModif }) => (
  <tr>
    <td>{exo.name}</td>
    <td>{exo.description}</td>
    <td>
      <input
        type="number"
        name="duration"
        disabled={isModif}
        value={exo.duration}
      />
    </td>
    <td>
      <input type="number" name="reps" disabled={isModif} value={exo.reps} />
    </td>
    <td>
      <input
        type="number"
        name="weight"
        disabled={isModif}
        value={exo.weight}
      />
    </td>
  </tr>
);
export default RecapExoLine;
