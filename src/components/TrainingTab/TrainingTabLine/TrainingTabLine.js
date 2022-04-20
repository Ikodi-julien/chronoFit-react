const TrainingTabLine = ({ training }) => (
  <tr>
    <td>{training.created_at}</td>
    <td>{training.training.name}</td>
    <td>
      <i class="fas fa-chevron-down"></i>
    </td>
  </tr>
);
export default TrainingTabLine;
