import { useRef, useEffect } from 'react';

// Generic hook to track the previous value of any type
function usePrevious<T>(value: T): T | undefined {
  const prevRef = useRef<T | undefined>(undefined);  // The ref will hold the previous value or undefined

  useEffect(() => {
    prevRef.current = value;  // Update the ref with the current value
  }, [value]);

  return prevRef.current;  // Return the previous value (or undefined if it's the first render)
}

export default usePrevious;
