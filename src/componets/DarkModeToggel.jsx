import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <>
      <button onClick={toggleTheme}>
        {/* {isDark ? <><img src="images/" alt="" /></> : "light "} */}
        <img
          src={isDark ? "images/icon-sun.svg " : "images/icon-moon.svg"}
          alt=""
          className={isDark ? "imgDark" : "imgLight"}
        />
      </button>
    </>
  );
};

export default DarkModeToggle;
