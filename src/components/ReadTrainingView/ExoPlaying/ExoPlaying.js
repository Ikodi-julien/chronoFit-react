import BipManager from '../BipManager/BipManager';
import VideoManager from '../VideoManager/VideoManager';
import './exoplaying.scss';

const ExoPlaying = ({exoPlaying}) => (
  <section className="readtraining__exoplaying">
    <BipManager time={exoPlaying.currentTime} isCountdown={exoPlaying.duration}/>
    <VideoManager isCounting={exoPlaying.isCounting} />
    <h1 className="readtraining__exoplaying__name">
      {exoPlaying.name}
    </h1>
    <div className="readtraining__exoplaying__description">
      {exoPlaying.description}
    </div>
    <div className="readtraining__exoplaying__series">
      Série {exoPlaying.serieIndex} / {exoPlaying.serieCount}
    </div>
    
    <div className="readtraining__exoplaying__row">
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