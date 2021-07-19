import Proptypes from 'prop-types';
import './exoinlist.scss';

const ExerciceInList = ({
  index, 
  name, 
  description, 
  duration, 
  reps, 
  weight, 
  menuIsVisible,
  toggleMenu
}) => {
  
  return (
    <div className="exoinlist">
      <div className="exoinlist__row">
        <div className="exoinlist__name">{name}</div>
        <button 
          className="exoinlist__toggle"
          onClick={() => toggleMenu(index)}
          ><i className="fas fa-bars"></i></button>

      </div>
        
      <div className="exoinlist__row">
        <div className="exoinlist__data exosinlist__description --hidden">Description: {description}</div>
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