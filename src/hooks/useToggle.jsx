import { useState, useCallback } from "react";

export const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);
  const toggle = useCallback(() => setState(state => !state), []);

  return [state, toggle];
};
