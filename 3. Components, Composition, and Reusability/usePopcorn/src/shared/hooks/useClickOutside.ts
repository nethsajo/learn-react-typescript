import { useEffect, useRef } from 'react';

export function useClickOutside(handler: () => void, listen: boolean = true) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    };

    document.addEventListener('click', handleClick, listen);

    return () => document.removeEventListener('click', handleClick, listen);
  }, [handler, listen]);

  return ref;
}
