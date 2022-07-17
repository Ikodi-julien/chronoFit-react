import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Field from "../../Field/Field";
import Modal from "../../ConfirmModal/ConfirmModal";

import "./exoform.scss";

const ExoForm = ({
  roundIndex,
  index,

  name,
  description,
  iteration,
  duration,
  reps,
  weight,

  setValue,
  putExo,
  deleteExo,
  showExoInList,
}) => {
  const location = useLocation();

  const handleDelete = () => {
    setIsOpen(true);
    setAction(() => () => deleteExo(roundIndex, index));
    setText(`Confirmer la suppression de cet exercice ?`);
  };

  const confirmNoName = () => {
    setIsOpen(true);
    setAction(() => () => deleteExo(roundIndex, index));
    setText(`Le nom est vide, confirmer la suppression de cet exercice ?`);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (name === "") {
      confirmNoName();
      return;
    }
    putExo(roundIndex, index);
  };

  const handleInputChange = (evt) => {
    if (evt.target) return setValue(evt.target.name, evt.target.value);
    setValue(evt.name, evt.value);
  };

  const handleClose = () => {
    if (name === "") {
      confirmNoName();
      return;
    }
    showExoInList({
      roundIndex,
      exoIndex: index,
      location: location.pathname,
    });
  };

  const [text, setText] = useState("");
  const [action, setAction] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Modal
        text={text}
        actionToDispatch={action}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="exoform__container">
        <div className="exoform__content">
          <div className="exoform__input__row --jc-right">
            <button
              className="training__button --transparent --icone"
              type="button"
              onClick={handleClose}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <form className="exoform__form" onSubmit={handleSubmit}>
            <div className="exoform__input__row">
              <label>Nom:</label>
              <Field
                index={index}
                name="name"
                type="text"
                className="exoform__input --name"
                placeholder="Nom de l'exo"
                value={name}
                onChange={handleInputChange}
              />
            </div>

            <div className="exoform__input__row">
              <label>Détails:</label>
              <textarea
                name="desc"
                type="text"
                className="exoform__input --textarea"
                placeholder="Description"
                value={description}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <hr className="exoform__input__separateur" />
            <div className="exoform__input__row">
              <Field
                name="iteration"
                className="exoform__input --number"
                type="number"
                min={1}
                placeholder="séries"
                value={iteration}
                onChange={handleInputChange}
              />
              <label>séries</label>
            </div>

            <div className="exoform__input__row">
              <Field
                name="duration"
                className="exoform__input --number"
                type="number"
                placeholder="durée"
                min={0}
                value={duration}
                onChange={handleInputChange}
              />
              <label>secondes / série</label>
            </div>

            <div className="exoform__input__row">
              <Field
                name="reps"
                className="exoform__input --number"
                type="number"
                placeholder="reps"
                min={0}
                value={reps}
                onChange={handleInputChange}
              />
              <label>reps / série</label>
            </div>

            <div className="exoform__input__row">
              <label>Poids</label>
              <Field
                name="weight"
                className="exoform__input --number"
                type="number"
                placeholder="kg"
                min={0}
                onChange={handleInputChange}
                value={weight}
              />
              <label>kg</label>
            </div>

            <hr className="exoform__input__separateur" />

            <div className="exoform__controls">
              <button
                type="submit"
                className="training__button  --transparent --icone --border"
              >
                <i className="fas fa-check"></i>
              </button>
              <button
                type="button"
                className="training__button  --transparent --icone --border"
                onClick={handleDelete}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ExoForm;
