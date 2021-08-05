import Landing from '../Landing/Landing';
import BenchmarkTrainingView from '../../containers/BenchmarkTrainingViewContainer';
import CustomTrainingView from '../../containers/CustomTrainingViewContainer';
import ReadTrainingView from '../ReadTrainingView/ReadTrainingView';
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
        <Route path="/benchmark_training">
          <BenchmarkTrainingView path="/benchmark_training"/>
        </Route>
        <Route path="/custom_training">
          <CustomTrainingView path="/custom_training"/>
        </Route>
        <Route path="/read_training">
          <ReadTrainingView />
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
