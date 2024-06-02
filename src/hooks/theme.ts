import { useState, useEffect } from "react";

export const useDarkMode = (): [boolean, () => void] => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      setDarkMode(savedMode ? JSON.parse(savedMode) : false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return [darkMode, toggleDarkMode];
};
