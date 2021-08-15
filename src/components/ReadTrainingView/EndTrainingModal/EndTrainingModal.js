import {useState}  from 'react';
import { NavLink } from 'react-router-dom'

import trainingServices from '../../../services/training';
import '../../ConfirmModal/modal.scss';

const EndTrainingModal = ({trainingDuration, trainingName, actionToDispatch}) => {
  
  const [isOpen, setIsOpen] = useState(true);
  
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
        <NavLink to="/custom_training">
          <button
            className="training__button --white"
            onClick={() => {
              actionToDispatch();
              setIsOpen(false)
            }}
          >
            OK
          </button>
        </NavLink>
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