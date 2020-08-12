import { useState, useEffect } from 'react';
import StarLayout from '../styles/star-layout'


export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};

export const useStarTheme = () => {
  const [theme, setTheme] = useState(starTheme)

  return (
    {theme === starTheme ? <StarLayout/> : null}
  )

}