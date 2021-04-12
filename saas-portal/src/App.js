import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// auth context
import { AuthProvider } from "./firebase/context";

// pages
import LandingPage from './pages/LandingPage/LandingPage';
import Page404 from './pages/404/404';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import InternOnboarding from './pages/Onboarding/InternOnboarding';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/intern-onboard">
            <InternOnboarding />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
