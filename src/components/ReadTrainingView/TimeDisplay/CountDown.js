import { useEffect, useRef } from "react";

import trainingServices from "../../../services/training";
import asyncTime from "../../../services/asyncTime";
import "./timedisplay.scss";

const CountDown = ({
  text,
  totalTime,
  time,
  isCounting,
  setCountdownTime,
  timelineIndex,
  setExo,
  addCountdownToRecord,
}) => {
  let countdownPercentage = useRef(0);

  useEffect(() => {
    if (isCounting) {
      if (time > 0.1) {
        (async () => {
          await asyncTime.wait(100);

          if (isCounting) {
            setCountdownTime(time - 0.1);
            countdownPercentage.current = 100 - (time / totalTime) * 100;
          }
        })();
        return;
      }

      (async () => {
        await asyncTime.wait(100);
        addCountdownToRecord();
        setExo(timelineIndex + 1);
      })();
    }
    // eslint-disable-next-line
  }, [time, totalTime, isCounting, setCountdownTime, timelineIndex, setExo]);

  return (
    <div
      className="readtraining__timedisplay --big"
      style={{
        backgroundImage: `conic-gradient(white ${countdownPercentage.current}%, rgb(0, 217, 255) 0%, rgb(0, 217, 255))`,
      }}
    >
      <div className="readtraining__timedisplay__container">
        {text !== "" && (
          <div className="readtraining__timedisplay__text">{text}</div>
        )}

        <div className="readtraining__timedisplay__time">
          {trainingServices.formatChrono(time)}
        </div>

        <button
          className="readtraining__timedisplay__button"
          onClick={() => {
            addCountdownToRecord();
            setExo(timelineIndex + 1);
          }}
        >
          FINI, SUIVANT !
        </button>
      </div>
    </div>
  );
};

export default CountDown;
