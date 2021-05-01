import Field from '../../Field/Field';
import './trainingform.scss';

const TrainingForm = ({
  exoForm,
  setInputValue,
  addExo
  }) => {
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
      addExo()
    }
    
  return (
    <div className="trainingform__container">
      <form 
        className="trainingform__form"
        onSubmit={handleSubmit}
        >
        <Field
          name="nameInput"
          type="text"
          className="trainingform__input"
          placeholder="Nom de l'exo"
          value={exoForm.nameInput.value}
          onChange={setInputValue}
          />

        <Field
          name="descInput"
          type="text"
          className="trainingform__textarea"
          placeholder="Description"
          value={exoForm.descInput.value}
          onChange={setInputValue}
        >
        </Field>
        <Field 
          name="durationInput"
          className="trainingform__input"
          type="number"
          placeholder="Durée"
          value={exoForm.durationInput.value}
          onChange={setInputValue}
        />
        <Field
          name="repsInput"
          className="trainingform__input"
          type="number"
          placeholder="Reps"
          value={exoForm.repsInput.value}
          onChange={setInputValue}
        />
        <Field
          name="weightInput"
          className="trainingform__input"
          type="number"
          placeholder="Poids"
          onChange={setInputValue}
          value={exoForm.weightInput.value}
        />
        
        <div className="trainingform__row">
          <button type="submit" className="trainingform__row__button  training__button">
            Add exo
          </button>
          <button type="button" className="trainingform__row__button  training__button">
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