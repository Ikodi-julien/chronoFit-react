import Field from '../../Field/Field';
import './exoinlistmenu.scss';

const ExoInListMenu = ({
  index, 
  name, 
  description, 
  duration, 
  reps, 
  weight,
  setExoInListInputValue,
  updateExo,
  toggleMenu,
  menuIsVisible
}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('updateExo');
    // updateExo();
  }
  return (
    <div className={
      menuIsVisible ? "exoinlistmenu__container" : "exoinlistmenu__container --hidden"
      }>
        
      <form 
        className="exoinlistmenu__form"
        onSubmit={handleSubmit}
        >
        
        <div className="exoinlistmenu__row">
        <Field
          index={index}
          name="nameInput"
          type="text"
          className="exoinlistmenu__input exoinlistmenu__input__name"
          placeholder="Nom de l'exo"
          value={name}
          onChange={setExoInListInputValue}
          />
        <button 
          className="exoinlistmenu__toggle"
          onClick={() => {
            toggleMenu(index)
            }}
        ><i className="fas fa-times"></i></button>
        </div>
        
        <Field
          name="descInput"
          type="text"
          className="exoinlistmenu__input exoinlistmenu__textarea"
          placeholder="Description"
          value={description}
          onChange={setExoInListInputValue}
        >
        </Field>
        
        <div className="exoinlistmenu__input__row">
          <label>Tps: </label>
          <Field
            name="durationInput"
            className="exoinlistmenu__input exoinlistmenu__input__number"
            type="number"
            placeholder="Durée"
            value={duration}
            onChange={setExoInListInputValue}
          />
        </div>
        <div className="exoinlistmenu__input__row">
          <label>Reps: </label>
        <Field
          name="repsInput"
          className="exoinlistmenu__input exoinlistmenu__input__number"
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={setExoInListInputValue}
        />
        </div>
        <div className="exoinlistmenu__input__row">
          <label>Pds: </label>
        <Field
          name="weightInput"
          className="exoinlistmenu__input exoinlistmenu__input__number"
          type="number"
          placeholder="Poids"
          onChange={setExoInListInputValue}
          value={weight}
        />
        </div>
        
        <div className="exoinlistmenu__input__row">
          <button type="submit" className="trainingform__row__button  training__button">
          <i className="fas fa-edit"></i>
          </button>
          <button type="button" className="trainingform__row__button  training__button">
          <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </form>      
    </div>
  )
}

export default ExoInListMenu;