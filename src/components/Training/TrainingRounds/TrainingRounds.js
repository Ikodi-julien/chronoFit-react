import Round from '../../../containers/RoundContainer';

import './trainingrounds.scss';

const TrainingRounds = ({training}) => {
  // console.log('exoList: ', exoList)
  return (
    <section className="trainingrounds__container">

      {
        training.map((round, index) => (
          <Round 
            key={index}
            index={index}
            duration={round.duration}
            iteration={round.iteration}
            shrunken={round.isShrunken}
            exoList={round.exoList}
          />
        ))
      }
    </section>
  )
}

export default TrainingRounds;