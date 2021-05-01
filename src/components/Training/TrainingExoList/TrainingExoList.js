import ExerciceInList from '../ExerciceInList/ExerciceInList.js';

import './trainingexolist.scss';

const TrainingExoList = ({exoList}) => {
  console.log('exoList: ', exoList)
  return (
    <section className="trainingexolist__container">
      {
        exoList.map((exo, index) => (
          <ExerciceInList 
            key={index}
            name={exo.name}
            description={exo.description}
            duration={exo.duration}
            reps={exo.reps}
            weight={exo.weight}
          />
        ))
      }

    </section>
  )
}

export default TrainingExoList;