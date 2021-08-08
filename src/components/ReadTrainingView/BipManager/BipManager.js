/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from 'react';
import bip from '../../../assets/first_bips.wav';
import finalBip from '../../../assets/final_bip.wav';

export default ({time}) => {
  
  useEffect(() => {
    if (
      Math.round(time * 10) === 20
      || Math.round(time * 10) === 10
    )  {
      document.getElementById("bip").play();
    }
    
    if (Math.round(time * 10) === 0) document.getElementById("finalBip").play()
  })
  return (
    <div>
      <audio src={bip} id="bip" />
      <audio src={finalBip} id="finalBip" />
    </div>
  )
}