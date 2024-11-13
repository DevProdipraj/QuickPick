import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme == "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
    }
  });

  return (
    <div className="relative mt-2">
      <IoIosSunny
        size={25}
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        className={` cursor-pointer   text-white mb-2  ${
          theme === "light" ? "opacity-0" : "opacity-100"
        } transition-all duration-300 `}
      />
      <FaMoon
        size={20}
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        className={`cursor-pointer absolute top-0 mt-1 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default DarkMode;
