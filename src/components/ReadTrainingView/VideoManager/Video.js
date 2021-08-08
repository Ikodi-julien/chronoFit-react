/* eslint-disable import/no-anonymous-default-export */
import video from '../../../assets/Cart - 8522.mp4';

export default () => (
  <video 
    autoPlay 
    loop 
    className="videomanager__video" 
    id="video"
  >
    <source src={video} type="video/mp4" />
  </video>
)