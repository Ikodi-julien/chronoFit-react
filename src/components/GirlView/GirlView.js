/*-------------------------------------------*/
import AppNav from '../../containers/AppNavContainer';
import TypeSelector from './TypeSelector/TypeSelector';
import TrainingApiListContainer from '../../containers/TrainingApiListContainer';

const BenchmarkTrainingView = (
  {
    getGirls
  }) => {

  return (
  <section className="training__container">
    <AppNav />
    <TypeSelector getGirls={getGirls} />
    <TrainingApiListContainer />
  </section>
)};

export default BenchmarkTrainingView;