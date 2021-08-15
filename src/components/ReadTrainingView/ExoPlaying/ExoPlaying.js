import {useEffect} from 'react';
import BipManager from '../SoundManager/BipManager';
import VideoManager from '../VideoManager/VideoManager';
import './exoplaying.scss';

const ExoPlaying = ({exoPlaying, isCountdown, countdownTime, isTransition, setIsTransition}) => {
  
  useEffect(() => {if (isTransition) setTimeout(() => setIsTransition(false), 10)})
  
  return (
  <section className="readtraining__exoplaying">
    <BipManager time={countdownTime} isCountdown={isCountdown}/>
    <h1 className="readtraining__exoplaying__title">
      Exo en cours
    </h1>
    <div className={
      `readtraining__exoplaying__container ${isTransition && "--position-left"}`
      }>
      <VideoManager isCounting={exoPlaying.isCounting} />
      <h1 className="readtraining__exoplaying__name">
        {exoPlaying.name}
      </h1>
      <div className="readtraining__exoplaying__description">
        {exoPlaying.description}
      </div>
      <div className="readtraining__exoplaying__series">
        {exoPlaying.serieCount > 0 && 
        `Série ${exoPlaying.serieIndex} / ${exoPlaying.serieCount}`}
      </div>
      
      <div className="readtraining__exoplaying__row">
        { exoPlaying.reps > 0 && exoPlaying.reps !== '' &&
          <div className="readtraining__exoplaying__reps">
            {exoPlaying.reps} reps
            </div>
        }
        {
          exoPlaying.weight !== '' && exoPlaying.weight > 0 &&
          <div className="readtraining__exoplaying__weight">
          {exoPlaying.weight}kg
        </div>
        }
      </div>
    </div>
    
  </section>
)}

export default ExoPlaying;