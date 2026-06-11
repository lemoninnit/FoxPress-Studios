import { useInView as useIntersectionObserver } from 'react-intersection-observer';

export function useInView(options = {}) {
  const { ref, inView, entry } = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1,
    ...options,
  });

  return { ref, inView, entry };
}
