import WodCard from "../WodCard/WodCard"
import './trainingapilist.scss';

const TrainingApiList = ({girlList, trainingIsSet, getOneGirl, typeSelected}) => {

  const girlsSelected = typeSelected === "all" ? girlList : girlList.filter(wod => wod.type === typeSelected);
  
  console.log(typeSelected)
  console.log(girlsSelected)
  return (
    <ul className="training__apilist">
      {
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
          </li>)
      }
    </ul>
  )
}
export default TrainingApiList;