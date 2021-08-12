import CTMForm from './CTMForm';
import CTMOptions from './CTMOptions';

import './customtrainingmanager.scss';

const CustomTrainingManager = (props) => {
  
  return (
    <div className="trainingmanager__container">
      <CTMForm props={props} />
      <CTMOptions 
        training={props.training}
        setTrainingType={props.setLocalTrainingType}  
        setReadTraining={props.setReadTraining}
        setTimecap={props.setTimecap}
        timecapValue={props.timecapValue}
      />
    </div>
  )
}
export default CustomTrainingManager;