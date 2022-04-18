import Landing from "../Landing/Landing";
import GirlViewContainer from "../../containers/GirlViewContainer";
import CustomTrainingView from "../../containers/CustomTrainingViewContainer";
import ReadTrainingContainer from "../../containers/ReadTrainingContainer";
import EndTrainingModalContainer from "../../containers/EndTrainingModalContainer";
import AppCommentContainer from "../../containers/AppCommentContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./app.scss";
import RecapTrainingsView from "../RecapTrainingsView/RecapTrainingsView";

function App() {
  return (
    <Router>
      <div className="app">
        <AppCommentContainer />
        <Switch>
          <Route path="/girls">
            <GirlViewContainer />
          </Route>
          <Route path="/entrainements">
            <CustomTrainingView />
          </Route>
          <Route path="/read_training">
            <ReadTrainingContainer />
          </Route>
          <Route path="/end_test">
            <EndTrainingModalContainer />
          </Route>
          <Route path="/recap_entrainements">
            <RecapTrainingsView />
          </Route>
          {/* /exercices pour voir les exos benchmarks proposés */}
          {/* /connexion pour les forms de connexion */}
          {/* /user pour la gestion des données utilisateur */}
          {/* /stats : StatsView stats et graphs, */}
          {/* /diary : DiaryView, calendrier entrainements */}
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
