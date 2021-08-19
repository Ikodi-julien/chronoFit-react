import { useHistory } from 'react-router-dom';
import {useEffect} from 'react';
import './wodcard.scss';

const WodCard = ({trainingIsSet, title, subtitle, exoList, desc, targetList, maleId, femaleId, getOneGirl}) => {
  const history = useHistory();
  
  useEffect(() => {
    if (trainingIsSet) history.push('/read_training');
  })
  
  return (
    <article className="training__apilist__wodcard">
      <h1 className="training__apilist__wodcard__title">
        {title}
      </h1>
      <h2 className="training__apilist__wodcard__subtitle">
        {subtitle}
      </h2>
      <ul className="training__apilist__wodcard__exolist">
        {
          exoList.map((exo, index) => (
            <li key={index} className="training__apilist__wodcard__exo">
              {exo}
            </li>
            )
          )
        }
      </ul>
      <p className="training__apilist__wodcard__desc">
        {desc}
      </p>
      <ul className="training__apilist__wodcard__exolist">
        {
          targetList.length > 0 && targetList.map((target, index) => 
          <li key={index} className="training__apilist__wodcard__exo">
            {target}
          </li>)
        }
      </ul>
      <div className="training__apilist__wodcard__row">
          {
            !femaleId && 
            <button 
            className="training__button"
            onClick={() => getOneGirl(maleId)}
          >
            GO
          </button>
          }
          {
            femaleId && 
            <button 
            className="training__button"
            onClick={() => getOneGirl(femaleId)}
          >
            Femme
          </button>
          }
          {
            femaleId && 
          <button 
            className="training__button"
            onClick={() => getOneGirl(maleId)}
          >
            Homme
          </button>
          }
      </div>
    </article>
  )}
export default WodCard;