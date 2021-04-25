import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Add from "./pages/Add";
import Dashboard from "./pages/Dashboard";
import Flower from "./pages/Flower";

function App(){
  return (
      <Router>

          <Navbar />
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "50px"
        }}>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
              <Router path="/about">
                  <About />
              </Router>
              <Router path="/add">
                  <Add />
              </Router>
              <Router path="/dashboard">
                  <Dashboard />
              </Router>
              <Router path="/flower/:id">
                  <Flower />
              </Router>
              <Router path="/">
                  <h1>Welcome to my app!</h1>
              </Router>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
