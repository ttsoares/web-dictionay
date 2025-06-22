import { useEffect, RefObject } from "react";

export default function useClickOutside(
  ref: RefObject<HTMLElement>,
  onOutsideClick: () => void,
  active: boolean
) {
  useEffect(() => {
    /**
     * Checks if the target element is outside the element referenced by the passed
     * ref. If it is, calls the passed onOutsideClick function.
     * @param {MouseEvent} event - The mouse event that triggered the listener.
     */
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
