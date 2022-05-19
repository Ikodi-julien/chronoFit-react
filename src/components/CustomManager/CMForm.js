/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";
import Modal from "../ConfirmModal/ConfirmModal";

export default ({
  item,
  itemName,
  itemList,
  getItems,
  setItem,
  setItemName,
  createItem,
  deleteItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [action, setAction] = useState(undefined);

  const handleClick = (evt) => {
    if (evt.target.name === "saveTraining") {
      setAction(() => createItem);
      // if trainingName is Empty, ask confirmation for updating training
      if (itemName === "") {
        setText(`Confirmer la mise à jour de ${item.name} ?`);
      } else {
        setText(`Confirmer la création de ${itemName} ?`);
      }
    } else if (evt.target.name === "deleteTraining") {
      setAction(() => deleteItem);
      // if trainingName is Empty, ask confirmation for emptying current training
      if (itemName === "") {
        setText(`Confirmer la suppression de ${item.name} ?`);
      } else {
        setText(`Supprimer tous les rounds et exercices affichés ?`);
      }
    }

    setIsOpen(true);
  };

  const handleSelectChange = (evt) => setItem(evt.target.value);

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <form onSubmit={(evt) => evt.preventDefault()}>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        text={text}
        actionToDispatch={action}
      />

      <div className="trainingmanager__col">
        <select
          name="trainings"
          onChange={handleSelectChange}
          value={item.name}
          className="trainingmanager__col__select"
        >
          <option key="Work Of Day" value="default">
            Work Of Day
          </option>
          {itemList.map((training, index) => (
            <option key={training.name} value={training.name}>
              {training.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={itemName}
          onChange={(evt) => setItemName(evt.target.value)}
          className="trainingmanager__col__input"
          placeholder="Nom du nouvel entrainement"
        />
      </div>

      <div className="trainingmanager__row">
        <button
          name="saveTraining"
          type="submit"
          onClick={handleClick}
          className="trainingmanager__row__button training__button"
        >
          Save
        </button>
        <button
          name="deleteTraining"
          type="submit"
          onClick={handleClick}
          className="trainingmanager__row__button training__button"
        >
          Delete
        </button>
      </div>
    </form>
  );
};
