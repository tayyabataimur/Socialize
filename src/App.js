import "./App.css";
import Landing from "./pages/Landing";
import Classroom from "./pages/Classroom";
import NewPerson from "./pages/NewPerson";
import Statistics from "./pages/Statistics";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/classroom">
          <Classroom />
        </Route>
        <Route path="/newPerson">
          <NewPerson />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
