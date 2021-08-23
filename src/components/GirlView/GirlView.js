/*-------------------------------------------*/
import AppNav from '../../containers/AppNavContainer';
import TypeSelector from './TypeSelector/TypeSelector';
import TrainingApiListContainer from '../../containers/TrainingApiListContainer';

const BenchmarkTrainingView = (
  {
    getGirls,
    getGirlsSuccess,
    setTypeSelected,
  }) => {

  return (
  <section className="training__container">
    <AppNav />
    <TypeSelector 
      getGirls={getGirls} 
      getGirlsSuccess={getGirlsSuccess} 
      setTypeSelected={setTypeSelected}
      />
    <TrainingApiListContainer/>
  </section>
)};

export default BenchmarkTrainingView;