import { useEffect, useRef } from 'react';

/**
 * Hook that runs callback only after initial render
 * @param callback Method to be called
 * @param dependencies Dependency array to trigger method
 */
export const useUpdateEffect = (callback: Function, dependencies: Array<any>) => {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, [...dependencies]);
};
