const RecapExoLine = ({ exo }) => (
  <tr>
    <td>{exo.name}</td>
    <td>{exo.description}</td>
    <td>{exo.duration}</td>
    <td>{exo.reps}</td>
    <td>{exo.weight}</td>
  </tr>
);
export default RecapExoLine;
