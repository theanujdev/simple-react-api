import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <section class="flex-auto">
      <h1
        className="font-bold
           text-xl sm:text-2xl lg:text-4xl text-center m-20"
      >
        Welcome To Simple React API Project
      </h1>
      <div class="grid grid-cols-2 md:grid-cols-4 md:gap-10 justify-items-center gap-6 max-w-max min-w-max mt-24 mx-auto">
        <Link to="/ip-details">
          <button class="text-2xl w-36 h-32 bg-white text-purple-900 shadow-lg font-bold focus:outline-none rounded-lg transform transition-transform hover:scale-105">
            Ip-Details
          </button>
        </Link>
        <Link to="/jokes">
          <button class="text-2xl w-36 h-32 bg-white text-purple-900 shadow-lg font-bold focus:outline-none rounded-lg transform transition-transform hover:scale-105">
            Jokes
          </button>
        </Link>
        <Link to="/robots">
          <button class="text-2xl w-36 h-32 bg-white text-purple-900 shadow-lg font-bold focus:outline-none rounded-lg transform transition-transform hover:scale-105">
            Robots
          </button>
        </Link>
        <Link to="/photos">
          <button class="text-2xl w-36 h-32 bg-white text-purple-900 shadow-lg font-bold focus:outline-none rounded-lg transform transition-transform hover:scale-105">
            Photos
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
