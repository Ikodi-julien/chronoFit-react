import './readcontrol.scss';

const ReadControl = ({currentExoIndex, setCurrentExo, startChrono, pauseChrono}) => (
  <div className="readtraining__control">
    <button
      className="training__button --transparent --xxl"
      onClick={() => setCurrentExo(currentExoIndex - 1)}
    >
      <i className="fas fa-backward"></i>
    </button>
    
    <button 
      className="training__button --transparent --xxl"
      onClick={() => startChrono()}
    >
      <i className="fas fa-play"></i>
    </button>
    
    <button 
      className="training__button --transparent --xxl"
      onClick={() => pauseChrono()}
    >
      <i className="fas fa-pause"></i>
    </button>
    
    <button 
      className="training__button --transparent --xxl"
      onClick={() => setCurrentExo(currentExoIndex + 1)}
    >
      <i className="fas fa-forward"></i>
    </button>
    
  </div>
)

export default ReadControl;