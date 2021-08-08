/* eslint-disable import/no-anonymous-default-export */
import Video from './Video';
import './video.scss';

export default ({isCounting}) => (
      <div className="videomanager__container">
        {
          isCounting && <Video />
        }
        <div className="--darkfilter" />
      </div>
  )