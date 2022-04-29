const TrainingTabLine = ({ training, displayTrainingDetails }) => (
  <tr>
    <td>{training.date}</td>
    <td>{training.name}</td>
    <td
      style={{
        width: "48px",
        height: "48px",
        fontSize: "1.5rem",
        margin: "auto",
        cursor: "pointer",
      }}
      onClick={() => displayTrainingDetails(training.id)}
    >
      <i
        className="far fa-eye"
        style={{
          padding: "6px",
        }}
      ></i>
    </td>
  </tr>
);
export default TrainingTabLine;
