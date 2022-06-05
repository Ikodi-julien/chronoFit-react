import { useState, useEffect } from "react";

import Modal from "../../ConfirmModal/ConfirmModal";

const RoundMenu = ({
  index,
  isVisible,
  addRound,
  addLocalRound,
  addExercice,
  deleteRound,
  setRoundMenuIsVisible,
  getLocalRounds,
  localRounds,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [action, setAction] = useState(undefined);

  useEffect(() => {
    getLocalRounds();
  }, [getLocalRounds]);

  const handleDeleteRound = () => {
    setIsOpen(true);
    setAction(() => () => deleteRound(index));
    setText(`Confirmer la suppression du round n°${index + 1} ?`);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        actionToDispatch={action}
        text={text}
      />
      <section
        className={`rounds__round__menu ${isVisible ? "--visible" : ""}`}
      >
        <div className="rounds__round__menu__header">
          <span>Liste des actions</span>
          <button
            className="rounds__round__menu__close"
            onClick={() => setRoundMenuIsVisible(index, false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <ul className="rounds__round__menu__actions">
          <div className="training__divider"></div>
          <li
            className="rounds__round__menu__action "
            onClick={() => addExercice(index)}
          >
            Ajouter un exercice
          </li>
          <li
            className="rounds__round__menu__action"
            onClick={() => addRound()}
          >
            Ajouter un round vide
          </li>
          <li
            className="rounds__round__menu__action"
            // onClick={() => addLocalRound()}
          >
            <select
              name="localRound"
              onChange={(evt) => {
                addLocalRound(evt.target.value);
                setRoundMenuIsVisible(index, false);
              }}
              defaultValue="default"
            >
              <option value="default" disabled>
                Ajouter un round perso
              </option>
              {localRounds.map((round, index) => (
                <option key={index} value={index}>
                  {round.name}
                </option>
              ))}
            </select>
          </li>
          <div className="training__divider"></div>
          <li
            className="rounds__round__menu__action"
            onClick={() => handleDeleteRound(index)}
          >
            Supprimer ce round
          </li>
        </ul>
      </section>
    </>
  );
};

export default RoundMenu;
