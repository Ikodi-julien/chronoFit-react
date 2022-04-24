const ExoTabLine = ({
  index,
  name,
  description,
  duration,
  reps,
  weight,
  isModif,
  setValue,
  deleteExoFromEndTrainingRecap,
}) => {
  const handleInputChange = (evt) => {
    setValue(index, evt.target.name, evt.target.value);
  };
  const handleDeleteExo = (evt) => {
    evt.preventDefault();
    deleteExoFromEndTrainingRecap(index);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <input
          type="number"
          name="duration"
          disabled={!isModif}
          value={duration}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="reps"
          disabled={!isModif}
          value={reps}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="weight"
          disabled={!isModif}
          value={weight}
          onChange={handleInputChange}
        />
      </td>
      {isModif && (
        <td>
          <button
            className="training__button --transparent --icone"
            onClick={(evt) => handleDeleteExo(evt)}
          >
            <i className="fas fa-eraser"></i>
          </button>
        </td>
      )}
    </tr>
  );
};
export default ExoTabLine;
