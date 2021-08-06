import {NavLink} from 'react-router-dom';
import TrainingDetails from './TrainingDetails/TrainingDetails';
import ExoDetails from './ExoDetails/ExoDetails';
import ExoPlaying from './ExoPlaying/ExoPlaying';
import ReadControl from './ReadControl/ReadControl';
import TimeDisplay from './TimeDisplay/TimeDisplay';

import './readtraining.scss';

const ReadTrainingView = ({trainingDetails, nextExo, previousExo, exoPlaying, timeDisplay}) => (
  <section className="readtraining">
    <NavLink to="custom_training" className="readtraining__close training__button --transparent --xl">
    <i className="fas fa-times-circle"></i>
    </NavLink>
    <TrainingDetails details={trainingDetails}/>
    <div className="readtraining__row">
      <ExoDetails exo={previousExo}/>
      <ExoDetails exo={nextExo}  modifier={"--right"}/>
    </div>
    <div className="readtraining__row --center">
      <ExoPlaying exoPlaying={exoPlaying} />
    </div>
    <div className="readtraining__exotime">
      <TimeDisplay text="Temps restant :" time={timeDisplay.exoPlaying.remaining} />
    </div>

    <ReadControl />
    
    <div className="readtraining__trainingtime">
      {/* <TimeDisplay text="Temps passé :" time={timeDisplay.training.fromBeginning} /> */}

      <TimeDisplay text="Temps total restant :" time={timeDisplay.training.remaining} />
    </div>
  </section>
)

export default ReadTrainingView;