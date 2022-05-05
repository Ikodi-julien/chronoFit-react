import GirlViewContainer from "../../containers/GirlViewContainer";
import CustomTrainingView from "../../containers/CustomTrainingViewContainer";
import ReadTrainingContainer from "../../containers/ReadTrainingContainer";
import EndTrainingModalContainer from "../../containers/EndTrainingModalContainer";
import AppCommentContainer from "../../containers/AppCommentContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./app.scss";
import RecapTrainingsContainer from "../../containers/RecapTrainingsContainer";
import LandingContainer from "../../containers/LandingContainer";

function App() {
  return (
    <Router>
      <div className="app">
        <AppCommentContainer />
        <Switch>
          <Route path="/girls">
            <GirlViewContainer />
          </Route>
          <Route path="/entrainement">
            <CustomTrainingView />
          </Route>
          <Route path="/read_training">
            <ReadTrainingContainer />
          </Route>
          <Route path="/end_test">
            <EndTrainingModalContainer />
          </Route>
          <Route path="/recap_entrainements">
            <RecapTrainingsContainer />
          </Route>
          {/* /exercices pour voir les exos benchmarks proposés */}
          {/* /connexion pour les forms de connexion */}
          {/* /user pour la gestion des données utilisateur */}
          {/* /stats : StatsView stats et graphs, */}
          {/* /diary : DiaryView, calendrier entrainements */}
          <Route path="/">
            <LandingContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
