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
  const history = useHistory();

  return (
    <section className={`modal ${!isOpen && "--hidden"}`}>
      <div className="modal__container --endtraining">
        <div className="modal__close">
          {/* <button
          className="training__button --transparent --icone"
          onClick={() => setIsOpen(false)}
        >
          <i className="fas fa-times"></i>
        </button> */}
        </div>
        <div className="modal__text">
          <h1>Entrainement terminé</h1>
          <h2>{trainingName}</h2>
          <p>Durée : {trainingServices.formatSeconds(trainingDuration)}</p>
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
              if (index < 2 || index > timeline.length - 2) return null;
              return <RecapExoLine key={index} exo={exo} />;
            })}
          </tbody>
        </table>

        <div className="modal__options">
          <button
            className="training__button --white"
            onClick={() => {
              actionToDispatch();
              setIsOpen(false);
              history.push(viewOrigin);
            }}
          >
            OK
          </button>
          {/* <button
          className="training__button --transparent --border"
          onClick={() => setIsOpen(false)}
        >
          Exit
        </button> */}
        </div>
      </div>
    </section>
  );
};

export default EndTrainingModal;
