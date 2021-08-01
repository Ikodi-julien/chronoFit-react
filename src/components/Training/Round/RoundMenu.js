const RoundMenu = ({index, addRound, addExercice, deleteRound, setRoundMenuIsVisible}) => (
  <section className="rounds__round__menu">
    <div className="rounds__round__menu__header">
      <span>Liste des actions</span>
      <button className="rounds__round__menu__close">
        <i className="fas fa-times" onClick={() => setRoundMenuIsVisible(index, false)}></i>
      </button>
    </div>
    
    <ul className="rounds__round__menu__actions">
      <li >-------------------------</li>
      <li 
        className="rounds__round__menu__action "
        onClick={() => addExercice(index)}
      >Add new Exercice</li>
      <li 
        className="rounds__round__menu__action" 
        onClick={() => addRound()}
      >Add round after</li>
      <li>-------------------------</li>
      <li 
        className="rounds__round__menu__action"
        onClick={() => deleteRound(index)}
        >Delete this round</li>
    </ul>
  </section>
)

export default RoundMenu;