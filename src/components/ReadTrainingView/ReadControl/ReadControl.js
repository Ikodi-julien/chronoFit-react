import './readcontrol.scss';

const ReadControl = () => (
  <div className="readtraining__control">
    <button className="training__button --transparent --xxl">
      <i className="fas fa-backward"></i>
    </button>
    
    <button className="training__button --transparent --xxl">
      <i className="fas fa-play"></i>
    </button>
    
    <button className="training__button --transparent --xxl">
      <i className="fas fa-pause"></i>
    </button>
    
    <button className="training__button --transparent --xxl">
      <i className="fas fa-forward"></i>
    </button>
    
  </div>
)

export default ReadControl;