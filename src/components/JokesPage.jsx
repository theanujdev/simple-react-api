import expandIcon from "../assets/img/expand-button.svg";
import { useState } from "react";

const JokesPage = () => {
  const [joke, setJoke] = useState({});
  const [expand, setExpand] = useState(false);
  function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((res) => {
        setExpand(false);
        setJoke(res);
      })
      .catch((err) => console.log(err));
  }
  function expandPunch() {
    setExpand(true);
  }
  return (
    <section class="p-10">
      <div class="container mx-auto flex flex-col items-center">
        <h1 class="text-xl sm:text-3xl text-center mb-7 sm:mb-10">
          Wanna Laugh ? 😂
        </h1>
        <button
          onClick={getJoke}
          class="bg-purple-500 text-white px-3 py-2 rounded-md shadow-md hover:bg-purple-700 focus:outline-none"
        >
          Get a Joke
        </button>
        {Object.keys(joke).length !== 0 && (
          <>
            <p class="mt-10 mb-5 text-xl">
              <span class="font-bold">Category : </span> {joke.type}
            </p>
            <p class="mt-4 mb-5">{joke.setup}</p>
            <img
              onClick={expandPunch}
              class=" transform hover:scale-110 cursor-pointer px-3 py-1 rounded-full mb-3 h-14 w-14"
              src={expandIcon}
              alt="Expand"
            />
            {expand && <p class="mb-5">{joke.punchline}</p>}
          </>
        )}
      </div>
    </section>
  );
};

export default JokesPage;
