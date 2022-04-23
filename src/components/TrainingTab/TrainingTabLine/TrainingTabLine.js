const TrainingTabLine = ({ training }) => (
  <tr>
    <td>{training.created_at}</td>
    <td>{training.name}</td>
    <td>
      <i className="fas fa-chevron-down"></i>
    </td>
  </tr>
);
export default TrainingTabLine;
