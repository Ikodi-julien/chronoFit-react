import { useState } from "react";
import trainingServices from "../../../services/training";
import ExoTab from "../../ExoTab/ExoTab";
import "../../../styles/modal.scss";

const RecapTrainingModale = ({ training }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className={`modal ${!isOpen && "--hidden"}`}>
      <div className="modal__container --endtraining">
        <div className="modal__header">
          <button
            className="readtraining__close training__button --xl"
            onClick={() => setIsOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="modal__text">
            <h1>{training.name}</h1>
            <p>Durée : {trainingServices.formatSeconds(training.duration)}</p>
            <p>Durée : {trainingServices.formatSeconds(training.duration)}</p>
          </div>
        </div>

        <ExoTab trainingRecord={training} />
      </div>
    </section>
  );
};

export default RecapTrainingModale;
