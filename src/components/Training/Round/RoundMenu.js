const RoundMenu = ({index, addRound, addExercice, deleteRound, setRoundMenuIsVisible}) => (
  <section className="roundmenu">
    <div className="roundmenu__header">
      <span>Liste des actions</span>
      <button className="roundmenu__close">
        <i className="fas fa-times" onClick={() => setRoundMenuIsVisible(index, false)}></i>
      </button>
    </div>
    
    <ul className="roundmenu__actions">
      <li >-------------------------</li>
      <li 
        className="roundmenu__action "
        onClick={() => addExercice(index)}
      >Add Exercice</li>
      <li 
        className="roundmenu__action" 
        onClick={() => addRound()}
      >Add round</li>
      <li>-------------------------</li>
      <li 
        className="roundmenu__action"
        onClick={() => deleteRound(index)}
        >Delete this round</li>
    </ul>
  </section>
)

export default RoundMenu;