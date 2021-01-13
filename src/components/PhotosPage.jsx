import { useEffect, useState } from "react";
import loadingBar from "../assets/img/loading.gif";
import loadingRocket from "../assets/img/rocket.gif";
import MoveToTop from "./MoveToTop";

function PhotosPage() {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadTrigger, setLoadTrigger] = useState(false);
  const [element, setElement] = useState(null);

  const cb = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setLoadTrigger(true);
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setImages(Array(15).fill("https://picsum.photos/200"));
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    console.log("uu1");
    if (loadTrigger && window.pageYOffset > 300) {
      console.log("uu2");
      setTimeout(() => {
        setImages([
          ...images,
          ...Array(15).fill("https://dummyimage.com/200.jpg"),
        ]);
      }, 2000);
    }
    if (loadTrigger) {
      setLoadTrigger(false);
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

  return (
    <section className="p-10 bg-white flex-auto">
      <MoveToTop />
      <div className="text-center">
        <h1 className="text-4xl">View Our Gallery</h1>
      </div>
      {loading && (
        <div className="mx-0 my-10 sm:m-10">
          <img className="block mx-auto" src={loadingRocket} alt="Loading" />
        </div>
      )}
      {images && (
        <div className="flex flex-wrap justify-center p-7">
          {images.map((image, index) => {
            return <img key={index} className="m-7" src={image} alt="Image" />;
          })}
        </div>
      )}
      {!loading && (
        <div className="m-10" ref={setElement}>
          <img className="block mx-auto" src={loadingBar} alt="Loading" />
        </div>
      )}
    </section>
  );
}

export default PhotosPage;
