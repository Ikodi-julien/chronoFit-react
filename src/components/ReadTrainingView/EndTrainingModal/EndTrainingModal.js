import { useState } from "react";
import { useHistory } from "react-router";
import trainingServices from "../../../services/training";
import ExoTab from "../../../components/ExoTab/ExoTab";
import ConfirmModal from "../../ConfirmModal/ConfirmModal";

const EndTrainingModal = ({
  trainingDuration,
  trainingName,
  actionToDispatch,
  viewOrigin,
  trainingRecord,
  setValue,
  resetRecordTraining,
  postNewTraining,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isModif, setIsModif] = useState(false);
  const [isModaleOpen, setIsModaleOpen] = useState(false);
  const history = useHistory();

  return (
    <section className={`modal ${!isOpen && "--hidden"}`}>
      <ConfirmModal
        text="L'entrainement et les exercices vont être enregistrés dans la base de données"
        isOpen={isModaleOpen}
        setIsOpen={setIsModaleOpen}
        actionToDispatch={postNewTraining}
      />
      <div className="modal__container --endtraining">
        <div className="modal__header">
          <div className="modal__text">
            <h1>Entrainement terminé</h1>
            <h2>{trainingName}</h2>
            <p>Durée : {trainingServices.formatSeconds(trainingDuration)}</p>
          </div>
          <div className="--row">
            <div className="modal__quit">
              {!isModif ? (
                <button
                  className="training__button"
                  onClick={() => setIsModif(!isModif)}
                >
                  Modifier
                </button>
              ) : (
                <button
                  className="training__button"
                  onClick={() => {
                    setIsModif(!isModif);
                    resetRecordTraining();
                  }}
                >
                  Annuler les modifs
                </button>
              )}
            </div>
            <div className="modal__quit">
              <button
                className="training__button"
                onClick={() => setIsModaleOpen(true)}
              >
                Enregistrer
              </button>
            </div>

            <div className="modal__quit">
              <button
                className="training__button"
                onClick={() => {
                  setIsOpen(false);
                  history.push("/");
                }}
              >
                Quitter sans enregistrer
              </button>
            </div>
          </div>
        </div>

        <ExoTab
          training={trainingRecord}
          setValue={setValue}
          isModif={isModif}
        />
      </div>
    </section>
  );
};

export default EndTrainingModal;
