import { useOnResize } from './../useOnResize/index';
import { useState, useEffect } from 'react';

export const useElementDimensions = <T extends HTMLElement | null>(
  ref: React.MutableRefObject<T>,
  updateOnResize = false,
  resizeDebounceTimeMs = 0
) => {
  const [height, setHeight] = useState<number>();
  const [width, setWidth] = useState<number>();
  const [left, setLeft] = useState<number>();

  const getDimensions = <T extends HTMLElement>(container: T) => {
    const width = container.getBoundingClientRect().width;
    setWidth(width);
    const height = container.getBoundingClientRect().height;
    setHeight(height);
    const left = container.getBoundingClientRect().left;
    setLeft(left);
  };

  const onResize = () => {
    if (ref.current) {
      getDimensions(ref.current as HTMLElement);
    }
  };

  useOnResize(updateOnResize ? onResize : null, resizeDebounceTimeMs);

  useEffect(() => {
    if (ref.current) {
      getDimensions(ref.current as HTMLElement);
    }
  }, [ref]);

  if (!ref.current) {
    return {
      width: 0,
      height: 0,
      left: 0,
      dimensionsReady: false
    };
  }

  return {
    width,
    height,
    left,
    dimensionsReady: true
  };
};
