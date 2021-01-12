import { useEffect, useState, useRef } from "react";
import loadingBar from "../assets/img/loading.gif";
import loadingRocket from "../assets/img/rocket.gif";

function PhotosPage() {
  const [images, setImages] = useState(
    Array(15).fill("https://dummyimage.com/200.jpg")
  );
  const [loading, setLoading] = useState(true);
  const [loadTrigger, setLoadTrigger] = useState(false);
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (loadTrigger) {
      // setImages((images) => [...images, ...data]);
      setImages([
        ...images,
        ...Array(15).fill("https://dummyimage.com/200.jpg"),
      ]);
      setLoadTrigger(false);
      // console.log("useEffect Run", loadingBar.current);
    }
  }, [loadTrigger]);

  useEffect(() => {
    if (element) {
      let options = {
        root: document.querySelector(null),
        rootMargin: "0px",
        threshold: 0,
      };

      let observer = new IntersectionObserver(cb, options);

      observer.observe(element);

      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    }
  }, [element]);

  const cb = (entries, observer) => {
    // console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Tri");
        setLoadTrigger(true);
        // console.log("Sad", element);
      }
    });
  };

  // let target = loadingDiv.current;

  // function getPhotos() {
  //   return (
  //     <div class="flex flex-wrap justify-center p-7">
  //       {Array(15)
  //         .fill()
  //         .map(() => {
  //           return (
  //             <img
  //               key={Math.random()}
  //               class="m-7"
  //               src="https://dummyimage.com/200.jpg"
  //               alt="Image"
  //             />
  //           );
  //         })}
  //     </div>
  //   );
  // }
  return (
    <section class="p-10 bg-white flex-auto">
      <div class="text-center">
        <h1 class="text-4xl">View Our Gallery</h1>
      </div>
      {loading && (
        <div className="mx-0 my-10 sm:m-10">
          <img class="block mx-auto" src={loadingRocket} alt="Loading" />
        </div>
      )}
      <div class="flex flex-wrap justify-center p-7">
        {images.map((image, index) => {
          return <img key={index} class="m-7" src={image} alt="Image" />;
        })}
      </div>

      <div className="m-10" ref={setElement}>
        <img class="block mx-auto" src={loadingBar} alt="Loading" />
      </div>
    </section>
  );
}

export default PhotosPage;
