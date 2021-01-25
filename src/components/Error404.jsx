import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="p-10 text-center bg-white flex-auto">
      <h1
        className="font-bold text-red-500
           text-4xl sm:text-2xl lg:text-5xl text-center m-12 sm:m-20"
      >
        Error 404 !
      </h1>
      <p className="text-4xl sm:text-5xl lg:text-3xl text-center my-36">
        Page Not Found!
      </p>
      <span className="inline-block mt-10">
        <span className="text-4xl lg:text-2xl inline-block">&larr;</span>
        <Link
          className="text-xl text-purple-800 font-bold hover:underline hover:text-purple-600 focus:outline-none rounded-md"
          to="/"
        >
          Back to HomePage
        </Link>
      </span>
    </section>
  );
};

export default Error404;
