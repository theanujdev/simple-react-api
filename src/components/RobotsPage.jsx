import { useState } from "react";

function Img({ imgNo }) {
  let intNumber = parseInt(imgNo);
  if (imgNo && Number.isInteger(intNumber) && intNumber > 0) {
    return Array(intNumber)
      .fill()
      .map(() => {
        let random = Math.floor(Math.random() * 1000) + 1;
        return (
          <img
            src={`https://robohash.org/${random}`}
            key={random}
            alt="Robots"
          />
        );
      });
  }

  return null;
}

const RobotsPage = () => {
  const [imgNo, setImgNo] = useState(null);
  return (
    <section class="p-5 sm:p-10">
      <div class="container mx-auto text-center">
        <div class="flex sm:w-2/3 mx-auto mt-4 justify-evenly sm:justify-between">
          <h1
            class="inline-block font-bold
           text-xl sm:text-2xl lg:text-4xl"
          >
            Robots (Max. 20)
          </h1>
          <input
            class="bg-white shadow-sm text-lg sm:py-1 sm:text-2xl px-3 w-2/5"
            type="number"
            name="search"
            id="search"
            min="0"
            value={imgNo}
            max="30"
            autoComplete="off"
            placeholder="Number"
            onChange={(e) => {
              if (e.target.value < 21) {
                setImgNo(e.target.value);
              }
            }}
          />
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center mt-11 gap-10 w-full md:w-11/12 mx-auto">
          <Img imgNo={imgNo} />
        </div>
      </div>
    </section>
  );
};

export default RobotsPage;
