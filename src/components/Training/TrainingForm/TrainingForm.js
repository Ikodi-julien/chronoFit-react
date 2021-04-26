import './trainingform.scss';

const TrainingForm = (props) => {
  
  return (
    <div className="trainingform__container">
      <form className="trainingform__form">
        <input
          className="trainingform__input"
          type="text"
          value=""
          placeholder="Nom"
        />
        <textarea
          className="trainingform__textarea"
          type="text"
          value=""
          placeholder="Description"
        >
        </textarea>
        <input
          className="trainingform__input"
          type="number"
          value=""
          placeholder="Durée"
        />
        <input
          className="trainingform__input"
          type="number"
          value=""
          placeholder="Reps"
        />
        <input
          className="trainingform__input"
          type="number"
          value=""
          placeholder="Poids"
        />
        
        <div className="trainingform__row">
          <button type="button" className="trainingform__row__button  training__button">
            Add exo
          </button>
          <button type="submit" className="trainingform__row__button  training__button">
            GO
          </button>
        </div>
        <div className="trainingform__totaltime">
          Durée totale = 00:00
        </div>
      </form>
    </div>
  )
}
export default TrainingForm;