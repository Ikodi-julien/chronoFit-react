/*-------------------------------------------*/
import AppNav from '../../containers/AppNavContainer';
import TypeSelector from './TypeSelector/TypeSelector';
import TrainingApiListContainer from '../../containers/TrainingApiListContainer';

const BenchmarkTrainingView = (
  {
    getGirls,
    setTypeSelected
  }) => {

  return (
  <section className="training__container">
    <AppNav />
    <TypeSelector getGirls={getGirls} setTypeSelected={setTypeSelected} />
    <TrainingApiListContainer/>
  </section>
)};

export default BenchmarkTrainingView;