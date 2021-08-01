import Proptypes from 'prop-types';
import './exoinlist.scss';

const ExerciceInList = ({
  roundIndex,
  index, 
  name, 
  description, 
  duration, 
  reps, 
  weight, 
  showExoForm,
}) => {
  
  const countDescription = description.length;
  const shrunkenDescription = description.substr(0, 55);
  
  return (
    <div className="exoinlist">
      <div className="exoinlist__row">
        <div className="exoinlist__name">{name}</div>
        <button 
          className="training__button --transparent --icone --xl"
          onClick={() => showExoForm(roundIndex, index)}
          ><i className="fas fa-caret-right"></i></button>

      </div>
        
      <div className="exoinlist__row --left">
        <div className="exoinlist__data exosinlist__description --shrunken">{countDescription > 50 ? shrunkenDescription : description}</div>
        {countDescription > 50 ? <div className="exoinlist__data">...</div> : null}
      </div>
      
      <div className="exoinlist__row">
        <div className="exoinlist__data exosinlist__duration">Tps: {duration}</div>
        <div className="exoinlist__data exosinlist__reps">Reps: {reps}</div>
        <div className="exoinlist__data exosinlist__weight">Pds: {weight}</div>
      </div>
    </div>
  )
}

ExerciceInList.propTypes = {
  name: Proptypes.string,
  description: Proptypes.string,
  duration: Proptypes.number,
  reps: Proptypes.number,
  weight: Proptypes.number
}
export default ExerciceInList;