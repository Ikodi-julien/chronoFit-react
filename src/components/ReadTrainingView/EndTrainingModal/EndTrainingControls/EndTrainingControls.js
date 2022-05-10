import { useHistory } from "react-router";

const EndTrainingControls = ({
  resetRecordTraining,
  setIsOpen,
  isModif,
  setIsModif,
  resetAll,
  postNewTraining,
}) => {
  const history = useHistory();
  return (
    <div className="--row">
      <div className="modal__quit">
        {!isModif ? (
          <button
            className="training__button"
            onClick={() => setIsModif(!isModif)}
          >
            Modifier
          </button>
        ) : (
          <button
            className="training__button"
            onClick={() => {
              setIsModif(!isModif);
              resetRecordTraining();
            }}
          >
            Annuler les modifs
          </button>
        )}
      </div>
      <div className="modal__quit">
        <button
          className="training__button"
          onClick={() => {
            setIsOpen(false);
            postNewTraining();
            resetAll();
            history.push("/");
          }}
        >
          Enregistrer
        </button>
      </div>

      <div className="modal__quit">
        <button
          className="training__button"
          onClick={() => {
            setIsOpen(false);
            resetAll();
            history.push("/");
          }}
        >
          Quitter sans enregistrer
        </button>
      </div>
    </div>
  );
};
export default EndTrainingControls;
