import { useEffect } from "react";

import trainingServices from "../../../services/training";
import asyncTime from "../../../services/asyncTime";
import "./timedisplay.scss";

const Chrono = ({
  text,
  time,
  isCounting,
  setChronoTime,
  setExo,
  timelineIndex,
  addToRecord,
}) => {
  useEffect(() => {
    (async () => {
      await asyncTime.wait(100);

      if (isCounting) {
        setChronoTime(time + 0.1);
      }
    })();
  }, [time, isCounting, setChronoTime]);

  return (
    <div className="readtraining__timedisplay --big">
      <div
        className={`readtraining__timedisplay__spiner ${
          isCounting && "--spin"
        }`}
      />

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
            addToRecord();
            setExo(timelineIndex + 1);
          }}
        >
          FINI, SUIVANT !
        </button>
      </div>
    </div>
  );
};

export default Chrono;
