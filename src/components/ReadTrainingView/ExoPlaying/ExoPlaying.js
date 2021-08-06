import './exoplaying.scss';

const ExoPlaying = ({exoPlaying}) => (
  <section className="readtraining__exoplaying">
    <h1 className="readtraining__exoplaying__name">
      {exoPlaying.name}
    </h1>
    <div className="readtraining__exoplaying__description">
      {exoPlaying.description}
    </div>
    <div className="readtraining__exoplaying__series">
      Série {exoPlaying.serieIndex} / {exoPlaying.serieCount}
    </div>
    
    <div class="readtraining__exoplaying__row">
      <div className="readtraining__exoplaying__reps">
        {exoPlaying.reps} reps
      </div>
      <div className="readtraining__exoplaying__weight">
        {exoPlaying.weight}kg
      </div>
    </div>
    
  </section>
)

export default ExoPlaying;