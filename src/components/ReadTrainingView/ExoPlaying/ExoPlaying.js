import BipManager from '../BipManager/BipManager';
import VideoManager from '../VideoManager/VideoManager';
import './exoplaying.scss';

const ExoPlaying = ({exoPlaying, isCountdown, countdownTime}) => (
  <section className="readtraining__exoplaying">
    <BipManager time={countdownTime} isCountdown={isCountdown}/>
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
      { exoPlaying.reps > 0 && exoPlaying.reps !== '' &&
        <div className="readtraining__exoplaying__reps">
          {exoPlaying.reps} reps
          </div>
      }
      {
        exoPlaying.weight !== '' &&
        <div className="readtraining__exoplaying__weight">
        {exoPlaying.weight}kg
      </div>
      }
    </div>
    
  </section>
)

export default ExoPlaying;