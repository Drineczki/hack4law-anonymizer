import { useEffect, useRef } from 'react';
export const useOnResize = (
  onResizeCallback: (() => void) | null | undefined,
  debounceTimeMs?: number
) => {
  const currDebounceTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!onResizeCallback) return;

    let onResize = onResizeCallback;
    if (debounceTimeMs) {
      onResize = () => {
        currDebounceTimeout.current &&
          clearTimeout(currDebounceTimeout.current);

        currDebounceTimeout.current = setTimeout(
          () => onResizeCallback(),
          debounceTimeMs
        );
      };
    }

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [onResizeCallback, debounceTimeMs]);
};
