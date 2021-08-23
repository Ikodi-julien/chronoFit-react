/* eslint-disable import/no-anonymous-default-export */
import {useEffect, useState} from 'react';
import Modal from '../../ConfirmModal/ConfirmModal';

export default (
  {
    training, 
    trainingName,
    trainingList,
    setLocalTraining,
    setLocalTrainingName,
    createLocalTraining,
    deleteLocalTraining,
    getLocalTrainings
  }) => {
    
    const [isOpen, setIsOpen] = useState(false)
    const [text, setText] = useState('')
    const [action, setAction] = useState(undefined)
    
    const handleClick = (evt) => {
      if (evt.target.name === "saveTraining") {
        setAction(() => createLocalTraining);
        // if trainingName is Empty, ask confirmation for updating training
        if (trainingName === '') {
          setText(`Confirmer la mise à jour de ${training.name} ?`)
        } else {
          setText(`Confirmer la création de ${trainingName} ?`)
        }
        
      } else if (evt.target.name === "deleteTraining") {
        setAction(() => deleteLocalTraining);
        // if trainingName is Empty, ask confirmation for emptying current training
        if (trainingName === '') {
          setText(`Confirmer la suppression de ${training.name} ?`)
        } else {
          setText(`Supprimer tous les rounds et exercices affichés ?`)
        }
      }
        
      setIsOpen(true);
    }
      
    const handleSelectChange = (evt) => setLocalTraining(evt.target.value);
    
    useEffect(() => {getLocalTrainings()}, [getLocalTrainings]);
    
    return (
      <form onSubmit={(evt) => evt.preventDefault() }>
        <Modal 
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          text={text}
          actionToDispatch={action}
        />
        
        <div className="trainingmanager__col">
          
          <select
            name="trainings"
            onChange={handleSelectChange}
            value={training.name}
            className="trainingmanager__col__select"
          >
          <option key="Work Of Day" value="default">Work Of Day</option>
          {
            trainingList.map((training, index) => (
              <option
                key={training.name} 
                value={training.name}
                >{training.name}</option>
            ))
          }
          </select>
          <input
            type="text"
            value={trainingName}
            onChange={(evt => setLocalTrainingName(evt.target.value))}
            className="trainingmanager__col__input"
            placeholder="Nom du nouvel entrainement"
            />
        </div>
        
        <div className="trainingmanager__row">
          <button 
            name="saveTraining"
            type="submit" 
            onClick={handleClick}
            className="trainingmanager__row__button training__button"
          >
            Save
          </button>
          <button 
            name="deleteTraining"
            type="submit" 
            onClick={handleClick}
            className="trainingmanager__row__button training__button">
            Delete
          </button>
        </div>
      </form>
    )
}