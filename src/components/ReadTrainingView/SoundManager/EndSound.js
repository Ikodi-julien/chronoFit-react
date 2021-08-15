/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from 'react';
import win from '../../../assets/mixkit-small-win-2020.wav'

export default ({finished}) => {
  
  useEffect(() => {
    if (finished) {
      document.getElementById("win").play()
    }
  })
  return (
    <div>
      <audio src={win} id="win" />
    </div>
  )
}