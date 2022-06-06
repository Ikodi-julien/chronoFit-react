/* eslint-disable import/no-anonymous-default-export */
import Field from "../../Field/Field";
import trainingServices from "../../../services/training";
import { NavLink } from "react-router-dom";

export default ({
  training,
  setTimecap,
  timecapValue,
  setType,
  typeValue,
  setReadTraining,
}) => {
  const timeInSec = trainingServices.getTrainingDuration(training);
  const formatedTrainingTime = trainingServices.formatSeconds(timeInSec);

  return (
    <div className="custommanager__options">
      <div className="custommanager__options__row">
        <label>Type :</label>
        <select
          name="type"
          onChange={(evt) => setType(evt.target.value)}
          value={typeValue}
        >
          <option value="">Choix du type</option>
          <option value="FOR TIME">FOR TIME</option>
          <option value="EMOM">EMOM</option>
          <option value="AMRAP">AMRAP</option>
          <option value="MAX REPS">MAX REPS</option>
        </select>
        <label>Time cap (mn):</label>
        <Field
          name="timecap"
          type="number"
          className="custommanager__options__input"
          placeholder="Durée maxi"
          value={timecapValue}
          onChange={(evt) => setTimecap(evt.value)}
        />
      </div>

      <div className="custommanager__options__row">
        <div className="custommanager__options__duration">
          {timeInSec > 0
            ? `Durée planifiée: ${
                isNaN(timeInSec) ? "il manque une valeur" : formatedTrainingTime
              }`
            : null}
        </div>

        <NavLink to="read_training">
          <button
            className="training__button"
            onClick={() => setReadTraining()}
          >
            <i className="fas fa-stopwatch --padded --xl"></i>
          </button>
        </NavLink>
      </div>
    </div>
  );
};
