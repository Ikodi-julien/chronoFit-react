import Proptypes from "prop-types";
import { useLocation } from "react-router-dom";
import "./exoinlist.scss";

const ExerciceInList = ({
  roundIndex,
  roundShrunken,
  index,
  name,
  description,
  iteration,
  duration,
  reps,
  weight,
  showExoForm,
}) => {
  const countDescription = description.length;
  const shrunkenDescription = description.substr(0, 55);
  const location = useLocation();
  return (
    <div className="exoinlist">
      <div className="exoinlist__column">
        <div>
          <div className="exoinlist__name">
            <span>{name}</span> -{" "}
            <span>
              {iteration} série{iteration > 1 ? "s" : ""}
            </span>
          </div>
        </div>
        {countDescription > 0 ? (
          <div className="exoinlist__row --left">
            <div className="exoinlist__data exosinlist__description --shrunken">
              {countDescription > 50 ? shrunkenDescription : description}
            </div>
            {countDescription > 50 ? (
              <div className="exoinlist__data">...</div>
            ) : null}
          </div>
        ) : null}
        <div className="exoinlist__row">
          <div className="exoinlist__data exosinlist__duration">
            Tps: {duration}
          </div>
          <div className="exoinlist__data exosinlist__reps">Reps: {reps}</div>
          <div className="exoinlist__data exosinlist__weight">
            Pds: {weight}
          </div>
        </div>
      </div>
      {!roundShrunken && (
        <button
          className="training__button --transparent --icone"
          onClick={() =>
            showExoForm({
              roundIndex,
              exoIndex: index,
              location: location.pathname,
            })
          }
        >
          <i className="fas fa-edit"></i>
        </button>
      )}
    </div>
  );
};

ExerciceInList.propTypes = {
  name: Proptypes.string,
  description: Proptypes.string,
  duration: Proptypes.number,
  reps: Proptypes.number,
  weight: Proptypes.number,
};
export default ExerciceInList;
