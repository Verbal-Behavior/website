import logo from './logo.svg';
import Navbar from './navbar';
import Login from './Login';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/Login">
            <Login />
            </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
