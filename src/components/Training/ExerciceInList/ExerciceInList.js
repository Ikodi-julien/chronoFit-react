import Proptypes from 'prop-types';
import './exerciceinlist.scss';

const ExerciceInList = ({name, description, duration, reps, weight}) => {
  
  return (
    <div className="exoinlist">
        <div className="exoinlist__row">
          <div className="exoinlist__data exosinlist__name">{name}</div>
          <div className="exoinlist__data exosinlist__duration">Durée: {duration}</div>
          {/* <div className="exoinlist__data exosinlist__description">Description: {description}</div> */}
          <div className="exoinlist__toggle"><i className="fas fa-ellipsis-v"></i></div>
        </div>
        
        <div className="exoinlist__row">
          <div className="exoinlist__data exosinlist__reps">reps: {reps}</div>
          <div className="exoinlist__data exosinlist__weight">weight: {weight}</div>
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