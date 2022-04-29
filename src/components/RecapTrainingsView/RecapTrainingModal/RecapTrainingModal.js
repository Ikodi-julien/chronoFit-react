import trainingServices from "../../../services/training";
import RecapExoTab from "../../RecapExoTab/RecapExoTab";
import "../../../styles/modal.scss";

const RecapTrainingModal = ({ training, isOpen, setModalIsOpen }) => {
  return (
    <section className={`modal ${!isOpen && "--hidden"}`}>
      <div className="modal__container --endtraining">
        <div className="modal__header">
          <button
            className="readtraining__close training__button --xl"
            onClick={() => setModalIsOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="modal__text">
            <h1>{training.name}</h1>
            <p>Durée : {trainingServices.formatSeconds(training.duration)}</p>
            <p>Durée : {trainingServices.formatSeconds(training.duration)}</p>
          </div>
        </div>

        <RecapExoTab training={training} />
      </div>
    </section>
  );
};

export default RecapTrainingModal;
