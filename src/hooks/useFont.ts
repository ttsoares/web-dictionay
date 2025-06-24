import { useEffect, useState } from "react";
import fontNames from "../utils/font-names";

export function useFont() {
  const [fontKey, setFontKey] = useState(() => {
    return localStorage.getItem("current-font") ?? "Serif";
  });

  const fontClass = fontNames[fontKey] ?? fontNames["Serif"];

  useEffect(() => {
    localStorage.setItem("current-font", fontKey);
  }, [fontKey]);

  return {
    fontKey,
    setFontKey,
    fontClass,
  };
}
