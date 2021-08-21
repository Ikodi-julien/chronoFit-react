import './voicemanager.scss';

const VoiceManager = ({isSpeaking, setIsSpeaking}) => (
  <button
    className="training__button --transparent --xl --voicemanager"
    onClick={() => {setIsSpeaking(!isSpeaking)}}
    >
    {
      isSpeaking ? 
        <i className="fas fa-volume-up"></i>
        :
        <i className="fas fa-volume-mute"></i>
    }
  </button>
)

export default VoiceManager;