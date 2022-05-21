import { useState } from "react";

import Modal from '../../ConfirmModal/ConfirmModal';

const RoundMenu = ({index, addRound, addExercice, deleteRound, setRoundMenuIsVisible}) => {
  
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState('')
  const [action, setAction] = useState(undefined)
  
  const handleDeleteRound = () => {
    setIsOpen(true);
    setAction(() => () => deleteRound(index));
    setText(`Confirmer la suppression du round n°${index + 1} ?`)
  }
  
  return (
    <section className="rounds__round__menu">
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        actionToDispatch={action}
        text={text}
      />
      
      <div className="rounds__round__menu__header">
        <span>Liste des actions</span>
        <button 
          className="rounds__round__menu__close"
          onClick={() => setRoundMenuIsVisible(index, false)}
        >
          <i className="fas fa-times" ></i>
        </button>
      </div>
      
      <ul className="rounds__round__menu__actions">
        <div className="training__divider"></div>
        <li 
          className="rounds__round__menu__action "
          onClick={() => addExercice(index)}
        >Ajouter un exercice</li>
        <li 
          className="rounds__round__menu__action" 
          onClick={() => addRound()}
        >Ajouter un round</li>
        <div className="training__divider"></div>
        <li 
          className="rounds__round__menu__action"
          onClick={() => handleDeleteRound(index)}
          >Supprimer ce round</li>
      </ul>
    </section>
  )
  }

export default RoundMenu;