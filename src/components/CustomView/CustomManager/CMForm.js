/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";
import Modal from "../../ConfirmModal/ConfirmModal";

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
    if (evt.target.name === "saveItem") {
      setAction(() => createItem);
      // if trainingName is Empty, ask confirmation for updating training
      if (itemName === "") {
        setText(`Confirmer la mise à jour de ${item.name} ?`);
      } else {
        setText(`Confirmer la création de ${itemName} ?`);
      }
    } else if (evt.target.name === "deleteItem") {
      setAction(() => deleteItem);
      // if trainingName is Empty, ask confirmation for emptying current training
      if (itemName === "") {
        setText(`Confirmer la suppression de ${item.name} ?`);
      } else {
        setText(`Confirmer la suppression ?`);
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

      <div className="custommanager__col">
        <select
          name="item"
          onChange={handleSelectChange}
          value={item.name}
          className="custommanager__col__select"
        >
          <option key="Work Of Day" value="default">
            Ceux qui existent
          </option>
          {itemList.map((training, index) => (
            <option key={index} value={training.name}>
              {training.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={itemName}
          onChange={(evt) => setItemName(evt.target.value)}
          className="custommanager__col__input"
          placeholder="Nom du nouveau"
        />
      </div>

      <div className="custommanager__row">
        <button
          name="saveItem"
          type="submit"
          onClick={handleClick}
          className="custommanager__row__button training__button"
        >
          Save
        </button>
        <button
          name="deleteItem"
          type="submit"
          onClick={handleClick}
          className="custommanager__row__button training__button"
        >
          Delete
        </button>
      </div>
    </form>
  );
};
