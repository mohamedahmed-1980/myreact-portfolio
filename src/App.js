import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import Header from "./components/Header";
import Portofolio from "./components/Portofolio";
import Contacts from "./components/Contacts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/index.html" component={Main} />
          <Route path="/portfolio.html" component={Portofolio} />
          <Route path="/contact.html" component={Contacts} />
        </Switch>
      </div>
    </Router>

  )
}

export default App;
