import { RefObject, useEffect } from 'react';
export const useOnKeyboardPress = <T extends HTMLElement>(
  callback: (e: KeyboardEvent) => void,
  rootElementRef?: RefObject<T>
) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      callback(e);
    };

    const rootElement = rootElementRef?.current;

    if (rootElement) {
      rootElement.addEventListener('keydown', onKey);
      return () => {
        rootElement.removeEventListener('keydown', onKey);
      };
    }

    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
    };
  }, [callback]);
};
