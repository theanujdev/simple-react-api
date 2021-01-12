import { useEffect, useState, useRef } from "react";
import loadingBar from "../assets/img/loading.gif";
import loadingRocket from "../assets/img/rocket.gif";

function PhotosPage() {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadTrigger, setLoadTrigger] = useState(false);
  const [element, setElement] = useState(null);

  const cb = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          setLoadTrigger(true);
        }, 2000);
      }
    });
  };

  useEffect(() => {
    setImages(Array(15).fill("https://dummyimage.com/200.jpg"));
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loadTrigger) {
      setImages([
        ...images,
        ...Array(15).fill("https://dummyimage.com/200.jpg"),
      ]);
      setLoadTrigger(false);
    }
  }, [loadTrigger]);

  useEffect(() => {
    if (element) {
      let options = {
        root: document.querySelector(null),
        rootMargin: "100px",
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
      {images && (
        <div class="flex flex-wrap justify-center p-7">
          {images.map((image, index) => {
            return <img key={index} class="m-7" src={image} alt="Image" />;
          })}
        </div>
      )}
      <div className="m-10" ref={setElement}>
        <img class="block mx-auto" src={loadingBar} alt="Loading" />
      </div>
    </section>
  );
}

//https://picsum.photos/200
export default PhotosPage;
