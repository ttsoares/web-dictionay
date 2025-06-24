import { useEffect, RefObject } from "react";

export default function useClickOutside(
  ref: RefObject<HTMLElement>,
  onOutsideClick: () => void,
  active: boolean
) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    }

    if (active) {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, [ref, onOutsideClick, active]);
}
