import { useState } from "react";
// import { useHistory } from "react-router";
import trainingServices from "../../../services/training";
import ExoTab from "../../../components/ExoTab/ExoTab";
import "../../../styles/modal.scss";

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
  // const history = useHistory();
  const createRecord = () => {
    postNewTraining();
    console.log("createRecord");
  };

  return (
    <section className={`modal ${!isOpen && "--hidden"}`}>
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
                onClick={() => createRecord()}
              >
                Enregistrer
              </button>
            </div>

            <div className="modal__quit">
              <button
                className="training__button"
                onClick={() => setIsOpen(false)}
              >
                Quitter sans enregistrer
              </button>
            </div>
          </div>
        </div>

        <ExoTab
          trainingRecord={trainingRecord}
          setValue={setValue}
          isModif={isModif}
        />
      </div>
    </section>
  );
};

export default EndTrainingModal;
