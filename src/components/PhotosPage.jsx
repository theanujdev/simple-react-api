import { useState } from "react";
import loadingBar from "../assets/img/loading.gif";
import loadingRocket from "../assets/img/rocket.gif";

function PhotosPage() {
  const [loading, setLoading] = useState(true);
  return (
    <section class="p-10 bg-white flex-auto">
      <div class="text-center">
        <h1 class="text-4xl">View Our Gallery</h1>
      </div>
      {loading && (
        <div className="m-10">
          <img class="block mx-auto" src={loadingRocket} alt="Loading" />
        </div>
      )}
      {/* <div class="flex flex-wrap justify-center p-7">
        <img class="m-7" src="https://dummyimage.com/200.jpg" alt="Image" />
        <img class="m-7" src="https://dummyimage.com/200.jpg" alt="Image" />
        <img class="m-7" src="https://dummyimage.com/200.jpg" alt="Image" />
        <img class="m-7" src="https://dummyimage.com/200.jpg" alt="Image" />
        <img class="m-7" src="https://dummyimage.com/200.jpg" alt="Image" />
        <img class="m-7" src="https://dummyimage.com/200.jpg" alt="Image" />
        <img class="m-7" src="https://dummyimage.com/200.jpg" alt="Image" />
        <img class="m-7" src="https://dummyimage.com/200.jpg" alt="Image" />
        <img class="m-7" src="https://dummyimage.com/200.jpg" alt="Image" />
        <img class="m-7" src="https://dummyimage.com/200.jpg" alt="Image" />
      </div> */}
      {/* <div className="m-10">
        <img class="block mx-auto" src={loadingBar} alt="Loading" />
      </div> */}
    </section>
  );
}

export default PhotosPage;
