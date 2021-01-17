import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-purple-800 text-sm sm:text-2xl">
      <div className="container mx-auto flex justify-evenly items-center py-3">
        <Link
          className="transition-colors p-2 text-white hover:text-purple-800 hover:bg-white focus:outline-none rounded-full"
          to="/"
        >
          <svg
            className="h-6 w-6 sm:h-8 sm:w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            // width="24"
            // height="24"
            viewBox="0 0 24 24"
          >
            <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
          </svg>
        </Link>
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
