import './trainingdetails.scss'

const TrainingDetails = ({name, roundIndex, currentRoundDuration}) => (
  <section className="readtraining__details">
    <h1 className="readtraining__details__name">
      {name}
    </h1>
    <div className="readtraining__details__round">
      Round n°{roundIndex}
    </div>
    <div className="readtraining__details__duration">
      Durée prévue : {currentRoundDuration}
    </div>
  </section>
)

export default TrainingDetails;