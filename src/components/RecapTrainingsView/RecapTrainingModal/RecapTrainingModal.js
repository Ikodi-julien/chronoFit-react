import trainingServices from "../../../services/training";
import RecapExoTab from "../../RecapExoTab/RecapExoTab";

const RecapTrainingModal = ({
  training,
  isOpen,
  setModalIsOpen,
  deleteTraining,
}) => {
  return (
    <section className={`modal ${!isOpen && "--hidden"}`}>
      <div className="modal__container --endtraining">
        <div className="modal__header">
          <button
            className="readtraining__close training__button --xl --transparent"
            onClick={() => setModalIsOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="modal__text">
            <h1>{training.name}</h1>
            <p>Durée : {trainingServices.formatSeconds(training.duration)}</p>
          </div>
        </div>

        <div className="--row" style={{ justifyContent: "flex-end" }}>
          <button
            className="training__button --l --transparent"
            onClick={() => {
              if (window.confirm("Supprimer cet entraînement ?")) {
                deleteTraining(training.id);
                setModalIsOpen(false);
              }
            }}
          >
            <i
              className="far fa-trash-alt"
              style={{ paddingRight: "10px" }}
            ></i>
            Supprimer
          </button>
        </div>

        <RecapExoTab training={training} />
      </div>
    </section>
  );
};

export default RecapTrainingModal;
