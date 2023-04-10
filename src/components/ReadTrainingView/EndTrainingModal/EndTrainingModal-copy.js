import { useState } from "react";
import { useHistory } from "react-router";
import trainingServices from "../../../services/training";
import EndTrainingExoTabContainer from "../../../containers/EndTrainingExoTabContainer";
import EndTrainingControls from "./EndTrainingControls/EndTrainingControls";

const EndTrainingModal = ({
  trainingDuration,
  trainingName,
  trainingType,
  trainingRecord,
  resetRecordTraining,
  postNewTraining,
  isUserLoggued,
  resetAll,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isModif, setIsModif] = useState(false);
  const history = useHistory();

  return (
    <section className={`modal ${!isOpen && "--hidden"}`}>
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
              postNewTraining={postNewTraining}
              setIsOpen={setIsOpen}
              isModif={isModif}
              setIsModif={setIsModif}
              resetAll={resetAll}
            />
          )}
        </div>

        <EndTrainingExoTabContainer exos={trainingRecord} isModif={isModif} />
      </div>
    </section>
  );
};

export default EndTrainingModal;
