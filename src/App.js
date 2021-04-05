import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import Header from "./components/Header";
import Portofolio from "./components/Portofolio";
import Contacts from "./components/Contacts";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portofolio} />
          <Route path="/contact" component={Contacts} />
        </Switch>

      </div>
    </Router>

  )
}

export default App;
