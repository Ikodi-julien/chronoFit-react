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
        <div className="rounds__round__menu__content">
          <div className="rounds__round__menu__header">
            <span></span>
            <button
              className="rounds__round__menu__close"
              onClick={() => setRoundMenuIsVisible(index, false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <ul className="rounds__round__menu__actions">
            <li
              className="rounds__round__menu__action "
              onClick={() => addExercice(index)}
            >
              <button
                type="button"
                className="training__button  --transparent --border --m --flex1"
              >
                Ajouter un exercice
              </button>
            </li>
            <li
              className="rounds__round__menu__action"
              onClick={() => addRound()}
            >
              <button
                type="button"
                className="training__button  --transparent --border --m --flex1"
              >
                Ajouter un nouveau round
              </button>
            </li>
            <li className="rounds__round__menu__action">
              <select
                name="localRound"
                className="rounds__round__menu__select"
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
            <hr className="rounds__round__menu__separateur" />

            <li
              className="rounds__round__menu__action"
              onClick={() => handleDeleteRound(index)}
            >
              <button
                type="button"
                className="training__button --border --m --flex1"
              >
                <i
                  className="fas fa-trash-alt"
                  style={{ marginRight: "5px" }}
                ></i>
                Supprimer ce round
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default RoundMenu;
