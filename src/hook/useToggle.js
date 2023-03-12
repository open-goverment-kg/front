import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(null);
  const toggleHandler = (e) => {
    if (!toggle) {
      return setToggle(e.currentTarget);
    }
    return setToggle(null);
  };
  const open = Boolean(toggle);
  return [toggle, toggleHandler, open];
};

export default useToggle;
