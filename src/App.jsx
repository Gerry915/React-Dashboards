import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Header from "components/Layout/Header";
import Home from "./pages/Home";
import DashboardOne from "./pages/DashboardOne";
import FleetManagment from "./pages/FleetManagement"
import ProjectDashboard from "pages/ProjectDashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {/* <Header /> */}
            <Home />
          </Route>
          <Route exact path="/dashboard-one">
            <DashboardOne />
          </Route>
          <Route exact path="/fleet-management">
            <FleetManagment />
          </Route>
          <Route exact path="/project-dashboard">
            <ProjectDashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
