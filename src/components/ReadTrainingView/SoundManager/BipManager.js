/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from 'react';
import bip from '../../../assets/first_bips_2.wav';
import finalBip from '../../../assets/final_bip.wav';

export default ({time, isCountdown}) => {
  
  useEffect(() => {
    if (isCountdown) {
      if (
        Math.round(time * 10) === 21
        || Math.round(time * 10) === 11
      )  {
        document.getElementById("bip").play();
      }
      
      if (Math.round(time * 10) === 1) document.getElementById("finalBip").play()
    }
  })
  return (
    <div>
      <audio src={bip} id="bip" />
      <audio src={finalBip} id="finalBip" />
    </div>
  )
}