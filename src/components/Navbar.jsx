import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import IpDetailsPage from "./IpDetailsPage";
import JokesPage from "./JokesPage";
import RobotsPage from "./RobotsPage";
import PhotosPage from "./PhotosPage";

const Navbar = () => {
  return (
    <Router>
      <nav className="bg-purple-800 text-sm sm:text-2xl">
        <div className="container mx-auto flex justify-evenly items-center py-3">
          <Link to="/ip-details">
            <button className="text-white hover:shadow-md hover:bg-purple-600 focus:outline-none px-2 py-2 rounded-md">
              IP Details
            </button>
          </Link>
          <Link to="/jokes">
            <button className="text-white hover:shadow-md hover:bg-purple-600 focus:outline-none px-2 py-2 rounded-md">
              Jokes
            </button>
          </Link>
          <Link to="/robots">
            <button className="text-white hover:shadow-md hover:bg-purple-600 focus:outline-none px-2 py-2 rounded-md">
              Robots
            </button>
          </Link>
          <Link to="/photos">
            <button className="text-white hover:shadow-md hover:bg-purple-600 focus:outline-none px-2 py-2 rounded-md">
              Photos
            </button>
          </Link>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/ip-details" component={IpDetailsPage} />
        <Route path="/jokes" component={JokesPage} />
        <Route path="/robots" component={RobotsPage} />
        <Route path="/photos" component={PhotosPage} />
      </Switch>
    </Router>
  );
};

export default Navbar;
