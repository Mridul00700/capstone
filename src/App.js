
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import About from './components/About/About';
import IssueTracker from './components/IssueTracker/IssueTracker';
import Navbar from './components/Navbar/Navbar';
import Authentication from './components/RegistrationAuthentication/Authentication';
import UserRegister from './components/RegistrationAuthentication/RegisterUser';
import './App.css';
function App() {
  return (
    <Router>
      <main className="main">
        <Navbar />
        <Switch>
          <Route path="/" exact><About /></Route>
          <Route path="/issues" exact><IssueTracker /></Route>
          <Route path="/authentication" exact> <Authentication /></Route>
          <Route path="/authentication/register"><UserRegister /></Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
