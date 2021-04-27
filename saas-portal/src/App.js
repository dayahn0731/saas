import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';

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
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </Router>
      <LandingPage />
    </>
  );
}

export default App;
