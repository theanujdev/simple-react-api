import { useState } from "react";

function Images(props) {
  let numbers = Array(props.numbers).fill();
  let listItems = numbers.map((_, i) => (
    <img key={i} src="https://robohash.org/02" alt="" />
  ));
  return <>{listItems}</>;
}

const RobotsPage = () => {
  const [imgNo, setImgNo] = useState(0);
  return (
    <section class="p-10">
      <div class="container mx-auto text-center">
        <div class="flex sm:w-2/3 mx-auto justify-between">
          <h1 class="inline-block text-2xl sm:text-4xl">Robots</h1>
          <input
            class="bg-white shadow-sm text-lg sm:text-2xl px-3 w-1/2"
            name="search"
            id="search"
            placeholder="Number"
            onChange={(e) => {
              setImgNo(e.target.value);
            }}
          />
        </div>
        <div class="grid grid-cols-3 md:grid-cols-5 justify-items-center mt-11 gap-10 w-3/4 mx-auto">
          <Images numbers={5} />
          <img src="https://dummyimage.com/100.jpg" alt="" />
          <img src="https://dummyimage.com/100.jpg" alt="" />

          <img src="https://dummyimage.com/100.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default RobotsPage;
