const ConfirmModal = ({ text, isOpen, setIsOpen, actionToDispatch }) => {
  return (
    <section className={isOpen ? "modal" : "modal --hidden"}>
      <div className="modal__container">
        <div className="modal__close">
          <button
            className="training__button --transparent --icone"
            onClick={() => setIsOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal__text">{text}</div>
        <div className="modal__options">
          <button
            className="training__button --transparent --border"
            onClick={() => {
              actionToDispatch();
              setIsOpen(false);
            }}
          >
            OK
          </button>
          <button
            className="training__button --transparent --border"
            onClick={() => setIsOpen(false)}
          >
            Exit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConfirmModal;
