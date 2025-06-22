import { useState } from "react";

export default function useToggler(initial = false): [boolean, () => void] {
  const [is, setIs] = useState(initial);

  function toggle() {
    setIs((prevIs) => !prevIs);
  }

  return [is, toggle];
}
