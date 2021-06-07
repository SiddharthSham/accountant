import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Nav } from "./components/nav";

import { Dashboard } from "./containers/dashboard";
import { Clients } from "./containers/clients";
import { Invoices } from "./containers/invoices";
import { Editor } from "./containers/editor";
import { Projects } from "./containers/projects";
import { Project } from "./containers/project";

export const App = () => {
  return (
    <Router>
      <Nav />

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
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/project/:id">
          <Project />
        </Route>
      </Switch>
    </Router>
  );
};
