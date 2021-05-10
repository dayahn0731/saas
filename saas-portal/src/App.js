import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Page404 from './pages/404/404';
import StartupLandingPage from './pages/StartupLandingPage/StartupLandingPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/startups">
          <StartupLandingPage />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
