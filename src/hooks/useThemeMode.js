import { useState, useEffect } from "react";

function useThemeMode(state) {
  useEffect(() => {
    const isUserColorTheme = localStorage.getItem("color-theme");
    if (isUserColorTheme == null) {
      localStorage.setItem("color-theme", "light");
    }
    if (isUserColorTheme === "light" || isUserColorTheme === null) {
      localStorage.removeItem("color-theme");
      localStorage.setItem("color-theme", "dark");
    } else {
      localStorage.removeItem("color-theme");
      localStorage.setItem("color-theme", "light");
    }

    // const isOsColorTheme = window.matchMedia("(prefers-color-scheme: dark)")
    //   .matches
    //   ? "dark"
    //   : "light";

    // const getUserTheme = () =>
    //   isUserColorTheme ? isUserColorTheme : isOsColorTheme;

    if (state) {
      localStorage.setItem("color-theme", "light");
      document.documentElement.setAttribute("color-theme", "light");
    } else {
      localStorage.setItem("color-theme", "dark");
      document.documentElement.setAttribute("color-theme", "dark");
    }
  }, [state]);

  return [];
}

export default useThemeMode;
