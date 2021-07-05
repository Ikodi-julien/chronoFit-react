export const EXO_INPUT_CHANGE = "Changement dans un des inputs du formulaire de saisie d'un exercice";
export const setInputValue = (inputObject) => ({
  type: EXO_INPUT_CHANGE,
  name: inputObject.name,
  value: inputObject.value
})

export const ADD_EXO = "Au clic, ajoute un exercice dans la training.exoList lors de la soumission du formulaire";
export const addExo = () => ({
  type: ADD_EXO
})



export const SHOW_EXOINLISTMENU = "Au clic, affiche le menu lié au composant ExoInList";
export const toggleExoInListMenu = (index) => ({
  type: SHOW_EXOINLISTMENU,
  index
})
export const EXO_IN_LIST_INPUT_CHANGE = "Changement dans un input d'un exo de la liste";
export const setExoInListInputValue = (inputObject) => ({
  type: EXO_IN_LIST_INPUT_CHANGE,
  index: inputObject.index,
  name: inputObject.name,
  value: inputObject.value
})