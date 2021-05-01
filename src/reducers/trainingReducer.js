import {ADD_EXO, EXO_INPUT_CHANGE} from '../actions/trainingActions';

const initialState = {
  exoList: [
    {
      name: 'Tractions strictes',
      description: 'pas de description',
      duration: 60,
      reps: 10,
      weight: 0
    },
    {
      name: 'Pompes diamant',
      description: 'pas de description',
      duration: 60,
      reps: 10,
      weight: 0
    },
    {
      name: 'Air squats',
      description: 'pas de description',
      duration: 60,
      reps: 10,
      weight: 0
    }
  ],
  exoForm: {
    nameInput: {
      value: '',
    },
    descInput: {
      value: '',
    },
    durationInput: {
      value: '',
    },
    repsInput: {
      value: '',
    },
    weightInput: {
      value: ''
    }
  }
}

const reducer = (state=initialState, action={}) => {
  
  switch (action.type) {
    case EXO_INPUT_CHANGE:
      return {
        ...state,
        exoForm: {
          ...state.exoForm,
          [action.name]: {value: action.value}
        }
      }
      
    case ADD_EXO:
      const {nameInput, descInput, durationInput, repsInput, weightInput} = state.exoForm;
      console.log(nameInput, descInput, durationInput, repsInput, weightInput);
      // Vérification du contenu des inputs et du type de value
      if (!nameInput.value || !descInput.value ) {
        console.log('1er');
        return state};

      if (
        (nameInput.value && typeof nameInput.value !== 'string') ||
        (descInput.value && typeof descInput.value !== 'string') ||
        (durationInput.value && typeof durationInput.value !== 'string') ||
        (repsInput.value && typeof repsInput.value !== 'string' )||
        (weightInput.value && typeof weightInput.value !== 'string')
      ) {
        console.log('2em')
        return state}
      
      return {
        ...state,
        exoList: [
          ...state.exoList,
          {
            name: nameInput.value,
            description: descInput.value,
            duration: +durationInput.value,
            reps: +repsInput.value,
            weight: +weightInput.value
          }
        ]
      }
      
    default:
      return state;
  }
}

export default reducer;