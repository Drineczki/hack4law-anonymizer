import React, { useEffect } from 'react';

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  // Todo: Any to be fixed
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  });
};
