import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Dashboard } from "./containers/dashboard";
import { Clients } from "./containers/clients";
import { Invoices } from "./containers/invoices";
import { Editor } from "./containers/editor";

export const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/clients"> Clients </Link>
          </li>
          <li>
            <Link to="/invoices"> Invoices </Link>
          </li>
          <li>
            <Link to="/editor"> Editor </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/clients">
          <Clients />
        </Route>
        <Route path="/invoices">
          <Invoices />
        </Route>
        <Route path="/editor">
          <Editor />
        </Route>
      </Switch>
    </Router>
  );
};
