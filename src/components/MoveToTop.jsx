import { useRef, useEffect } from "react";

function MoveToTop() {
  const button = useRef(null);

  useEffect(() => {
    window.onscroll = () => {
      scrollFunction();
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      button.current.style.display = "block";
    } else {
      button.current.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <button
      ref={button}
      onClick={topFunction}
      className="fixed bottom-6 pt-2 right-6 text-white text-4xl bg-purple-600 rounded-full h-12 w-12 shadow-md hover:bg-purple-700 focus:outline-none hidden"
    >
      ^
    </button>
  );
}

export default MoveToTop;
