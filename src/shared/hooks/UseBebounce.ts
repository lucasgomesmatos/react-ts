import { useCallback, useRef } from "react"

export const useDebounce = (delay = 1000, notDelayFirstTime = true) => {
  const isFirstTime = useRef(notDelayFirstTime);
  const debouncing = useRef<number | undefined>();

  const debounce = useCallback((func: () => void) => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      func();
    } else {
      if (debouncing.current) {
        clearTimeout(debouncing.current);
      }
      debouncing.current = setTimeout(() => func(), delay);
    }
  }, [delay])

  return { debounce };
}