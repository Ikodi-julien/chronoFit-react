import Landing from '../Landing/Landing';
import TrainingView from '../../containers/TrainingViewContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './app.scss';

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/training">
          <TrainingView />
        </Route>
        {/* /trainingDone pour voir les stats des entrainements réalisés */}
        {/* /exercices pour voir les exos benchmarks proposés */}
        {/* /connexion pour les forms de connexion */}
        {/* /user pour la gestion des données utilisateur */}
        <Route path="/">
          <Landing />
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
