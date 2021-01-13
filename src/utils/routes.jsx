import HomePage from "../components/HomePage";
import IpDetailsPage from "../components/IpDetailsPage";
import JokesPage from "../components/JokesPage";
import RobotsPage from "../components/RobotsPage";
import PhotosPage from "../components/PhotosPage";

export default [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/ip-details",
    component: IpDetailsPage,
  },
  {
    path: "/jokes",
    component: JokesPage,
  },
  {
    path: "/robots",
    component: RobotsPage,
  },
  {
    path: "/photos",
    component: PhotosPage,
  },
];
