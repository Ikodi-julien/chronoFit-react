import {useState}  from 'react';
import { useHistory } from 'react-router';
import trainingServices from '../../../services/training';
import '../../ConfirmModal/modal.scss';

const EndTrainingModal = ({trainingDuration, trainingName, actionToDispatch, viewOrigin}) => {
  
  const [isOpen, setIsOpen] = useState(true);
  const history = useHistory();
  
  return (
  <section className={ `modal --endmodal ${!isOpen && "--hidden"}`}>
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
      <div className="modal__options">
          <button
            className="training__button --white"
            onClick={() => {
              actionToDispatch();
              setIsOpen(false);
              console.log(history)
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
)}

export default EndTrainingModal;