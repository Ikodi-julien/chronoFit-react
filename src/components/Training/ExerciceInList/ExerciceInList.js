import './exerciceinlist.scss';

const ExerciceInList = (props) => {
  
  return (
    <div className="exoinlist">
        <div className="exoinlist__row">
          <div className="exoinlist__data exosinlist__name">Name</div>
          <div className="exoinlist__data exosinlist__description">Durée</div>
          <div className="exoinlist__toggle"><i class="fas fa-ellipsis-v"></i></div>
        </div>
        
        <div className="exoinlist__row">
          <div className="exoinlist__data exosinlist__reps">Reps</div>
          <div className="exoinlist__data exosinlist__weight">Poids</div>
        </div>
        

    </div>
  )
}

export default ExerciceInList;