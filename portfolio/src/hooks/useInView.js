import { useEffect, useRef, useState } from 'react';

/**
 * Hook to detect if an element is in the viewport.
 * @param {Object} options IntersectionObserver options
 * @returns [ref, inView]
 */
export default function useInView(options = { threshold: 0.1 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}
