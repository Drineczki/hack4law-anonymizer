import { useCallback, useState } from 'react';
import { useOnResize } from '../useOnResize';

const getViewportSize = () => ({
  height: window.innerHeight,
  width: window.innerWidth
});

export const useViewportSize = () => {
  const [windowSize, setWindowSize] = useState<{
    height: number;
    width: number;
  }>(getViewportSize());

  const onResize = useCallback(() => {
    setWindowSize(getViewportSize());
  }, []);

  useOnResize(onResize, 100);

  return windowSize;
};
