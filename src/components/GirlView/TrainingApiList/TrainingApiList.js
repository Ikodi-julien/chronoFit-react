import WodCard from "../WodCard/WodCard";
import CircularProgress from '@material-ui/core/CircularProgress';

import './trainingapilist.scss';

const TrainingApiList = (
  {
    girlList, 
    trainingIsSet, 
    getOneGirl, 
    getOneIsLoading,
    typeSelected,
  }) => {

  const girlsSelected = typeSelected === "all" ? girlList : girlList.filter(wod => wod.type === typeSelected);
  
  console.log(typeSelected)
  console.log(girlsSelected)
  return (
    <ul className="training__apilist">
      {
        getOneIsLoading ?
          <div className="training__apilist__loadercontainer">
            <CircularProgress color={'inherit'}/>
          </div>
        :
          girlsSelected.map(wod =>
            <li key={wod.id}>
              <WodCard
                title={wod.title}
                subtitle={wod.subtitle}
                exoList={wod.exercices}
                desc={wod.desc}
                targetList={wod.target}
                maleId={wod.maleId}
                femaleId={wod.femaleId}
                getOneGirl={getOneGirl}
                trainingIsSet={trainingIsSet}
              />
            </li>
          )
      }
    </ul>
  )
}
export default TrainingApiList;