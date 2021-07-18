import ExoInListContainer from '../../../containers/ExoInListContainer';

import './round.scss';

const Round = ({
  index,
  duration,
  iteration,
  shrunken,
  exoList,
}) => {
  // console.log('exoList: ', exoList)
  return (
    <section className="trainingexolist__container">
      <div className="trainingrounds__header">
        <i className="fas fa-ellipsis-v"></i>
        <span>Round n°{index} - durée : {duration} - {iteration} rounds of :</span>
        <i className="fas fa-caret-right"></i>
      </div>
      {
        exoList.map((exo, index) => (
          <ExoInListContainer 
            key={index}
            index={index}
            name={exo.name}
            description={exo.description}
            duration={exo.duration}
            reps={exo.reps}
            weight={exo.weight}
            menuIsVisible={exo.menuIsVisible}
          />
        ))
      }

    </section>
  )
}

export default Round;