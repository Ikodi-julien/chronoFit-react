import { useState } from "react";
import { useHistory } from "react-router";
import trainingServices from "../../../services/training";
import ExoTab from "../../../components/ExoTab/ExoTab";
import ConfirmModal from "../../ConfirmModal/ConfirmModal";
import EndTrainingControls from "./EndTrainingControls/EndTrainingControls";

const EndTrainingModal = ({
  trainingDuration,
  trainingName,
  trainingType,
  trainingRecord,
  setValue,
  resetRecordTraining,
  postNewTraining,
  isUserLoggued,
  resetAll,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isModaleOpen, setIsModaleOpen] = useState(false);
  const [isModif, setIsModif] = useState(false);
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
          <button
            className="readtraining__close training__button --xl --transparent"
            onClick={() => {
              setIsOpen(false);
              resetAll();
              history.push("/");
            }}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="modal__text">
            <h1>Entrainement terminé</h1>
            <h2>{trainingName}</h2>
            <h3>{trainingType}</h3>
            <p>Durée : {trainingServices.formatSeconds(trainingDuration)}</p>
          </div>
          {isUserLoggued && (
            <EndTrainingControls
              resetRecordTraining={resetRecordTraining}
              setIsModaleOpen={setIsModaleOpen}
              setIsOpen={setIsOpen}
              isModif={isModif}
              setIsModif={setIsModif}
              resetAll={resetAll}
            />
          )}
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
