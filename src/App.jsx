import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import IpDetailsPage from "./components/IpDetailsPage";
import JokesPage from "./components/JokesPage";
import RobotsPage from "./components/RobotsPage";
import PhotosPage from "./components/PhotosPage";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/ip-details" component={IpDetailsPage} />
          <Route path="/jokes" component={JokesPage} />
          <Route path="/robots" component={RobotsPage} />
          <Route path="/photos" component={PhotosPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
