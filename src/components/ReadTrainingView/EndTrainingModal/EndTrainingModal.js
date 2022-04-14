import { useState } from "react";
import { useHistory } from "react-router";
import trainingServices from "../../../services/training";
import RecapExolineContainer from "../../../containers/RecapExolineContainer";
import "../../ConfirmModal/modal.scss";

const EndTrainingModal = ({
  trainingDuration,
  trainingName,
  actionToDispatch,
  viewOrigin,
  trainingRecord,
  setValue,
  resetRecordTraining,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isModif, setIsModif] = useState(true);
  const history = useHistory();
  const createRecord = () => console.log("createRecord");

  return (
    <section className={`modal ${!isOpen && "--hidden"}`}>
      <div className="modal__container --endtraining">
        <div className="modal__text">
          <h1>Entrainement terminé</h1>
          <h2>{trainingName}</h2>
          <p>Durée : {trainingServices.formatSeconds(trainingDuration)}</p>
        </div>

        <div className="--row">
          <div className="modal__quit">
            {isModif ? (
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
            <button className="training__button" onClick={() => createRecord()}>
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

        <table>
          <thead>
            <tr>
              <th>Exo</th>
              <th>Description</th>
              <th>Temps</th>
              <th>Reps</th>
              <th>Poids</th>
            </tr>
          </thead>
          <tbody>
            {trainingRecord.map((exo, index) => {
              return (
                <RecapExolineContainer
                  key={index}
                  index={index}
                  isModif={isModif}
                  setValue={setValue}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EndTrainingModal;
