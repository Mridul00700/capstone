
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import About from './components/About/About';
import IssueTracker from './components/IssueTracker/IssueTracker';
import Navbar from './components/Navbar/Navbar';
import Authentication from './components/RegistrationAuthentication/Authentication';

import './App.css';
function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact><About /></Route>
          <Route path="/issues" exact><IssueTracker /></Route>
          <Route path="/authentication"> <Authentication /></Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
