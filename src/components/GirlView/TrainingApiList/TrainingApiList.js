import WodCard from "../WodCard/WodCard"
import './trainingapilist.scss';

const TrainingApiList = ({girlList, trainingIsSet, getOneGirl}) => {

  return (
    <ul className="training__apilist">
      {
        girlList.map(wod =>
        <li key={wod.id}>
          <WodCard
            id={wod.id}
            title={wod.title}
            subtitle={wod.subtitle}
            exoList={wod.exercices}
            desc={wod.desc}
            targetList={wod.target}
            getOneGirl={getOneGirl}
            trainingIsSet={trainingIsSet}
          />
        </li>)
      }
    </ul>
  )
}
export default TrainingApiList;