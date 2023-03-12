import { useLayoutEffect, useState } from "react";

const useScroll = (id) => {
  const [scroll, setScroll] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      if (window.scrollY > 50) {
        return setScroll(true);
      }
      return setScroll(false);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [id]);
  return scroll;
};

export default useScroll;
