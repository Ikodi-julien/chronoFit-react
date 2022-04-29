const RecapExoTabLine = ({ index, exo }) => {
  return (
    <tr>
      <td>{exo.name}</td>
      <td>{exo.description}</td>
      <td>
        <input type="number" name="duration" disabled value={exo.duration} />
      </td>
      <td>
        <input type="number" name="reps" disabled value={exo.reps} />
      </td>
      <td>
        <input type="number" name="weight" disabled value={exo.weight} />
      </td>
    </tr>
  );
};
export default RecapExoTabLine;
