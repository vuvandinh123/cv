import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

const Darkmod = ({ size }) => {
  const [activeDarkMode, setActiveDarkMode] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setActiveDarkMode(true);
    }
  }, []);
  const handleClickDarkMode = () => {
    setActiveDarkMode(!activeDarkMode);
    if (activeDarkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <div>
      <div
        className="flex items-center cursor-pointer justify-center relative z-20 "
        onClick={handleClickDarkMode}
      >
        {activeDarkMode ? (
          <FaSun color="yellow" size={size || 25}></FaSun>
        ) : (
          <MdDarkMode size={size || 25}></MdDarkMode>
        )}
      </div>
    </div>
  );
};

export default Darkmod;
