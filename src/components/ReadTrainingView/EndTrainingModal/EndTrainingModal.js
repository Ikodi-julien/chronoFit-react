import { useState } from "react";
import { useHistory } from "react-router";
import trainingServices from "../../../services/training";
import RecapExoLine from "./RecapExoLine/RecapExoLine";
import "../../ConfirmModal/modal.scss";

const EndTrainingModal = ({
  trainingDuration,
  trainingName,
  actionToDispatch,
  viewOrigin,
  timeline,
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
            <button
              className="training__button"
              onClick={() => setIsModif(!isModif)}
            >
              Modifier
            </button>
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
            {timeline.map((exo, index) => {
              if (index < 2 || index > timeline.length - 3) return null;
              return <RecapExoLine key={index} exo={exo} isModif={isModif} />;
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EndTrainingModal;
