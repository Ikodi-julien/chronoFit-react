/*-------------------------------------------*/
import AppNav from '../../containers/AppNavContainer';
import TypeSelector from './TypeSelector/TypeSelector';
import TrainingApiList from '../BenchmarkTrainingView/TrainingApiList/TrainingApiList';

const BenchmarkTrainingView = (
  {
    allTrainings, 
    getTrainings, 
    setTrainingId, 
    getCurrentTraining
   }) => {

  return (
  <section className="training__container">
    <AppNav />
    <TypeSelector />
    <TrainingApiList />
  </section>
)};

export default BenchmarkTrainingView;