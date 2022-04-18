const ExoTabLine = ({
  index,
  name,
  description,
  duration,
  reps,
  weight,
  isModif,
  setValue,
}) => {
  const handleInputChange = (evt) => {
    setValue(index, evt.target.name, evt.target.value);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <input
          type="number"
          name="duration"
          disabled={isModif}
          value={duration}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="reps"
          disabled={isModif}
          value={reps}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="weight"
          disabled={isModif}
          value={weight}
          onChange={handleInputChange}
        />
      </td>
    </tr>
  );
};
export default ExoTabLine;
