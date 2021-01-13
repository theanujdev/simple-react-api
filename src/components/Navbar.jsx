import { Link } from "react-router-dom";
const Navbar = () => {
  return (
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
  );
};

export default Navbar;
