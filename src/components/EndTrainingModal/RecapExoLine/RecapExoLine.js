const RecapExoLine = ({ exo }) => (
  <div>
    <span>{exo.name}</span> - <span>{exo.description}</span> -
    <span>{exo.duration}</span> - <span>{exo.reps}</span> -
    <span>{exo.weight}</span>
  </div>
);
export default RecapExoLine;
