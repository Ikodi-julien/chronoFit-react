import { useEffect } from "react";

const ExoTabLine = ({ index, exo, isModif, setValue, deleteExo }) => {
  const handleInputChange = (evt) => {
    setValue(index, evt.target.name, evt.target.value);
  };
  const handleDeleteExo = (evt) => {
    evt.preventDefault();
    deleteExo(index);
  };
  useEffect(() => console.log("render"), [exo]);

  return (
    <tr>
      <td>{exo.name}</td>
      <td>{exo.description}</td>
      <td>
        <input
          type="number"
          name="duration"
          disabled={!isModif}
          value={exo.duration}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="reps"
          disabled={!isModif}
          value={exo.reps}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="weight"
          disabled={!isModif}
          value={exo.weight}
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
