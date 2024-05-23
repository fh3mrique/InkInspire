import React, { useEffect, useRef } from 'react';

interface UIInfiniteScrollProps {
  fetchMore: () => void;
}

const UIInfiniteScroll: React.FC<UIInfiniteScrollProps> = ({ fetchMore }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        fetchMore();
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [fetchMore]);

  return <div ref={containerRef} />;
};

export default UIInfiniteScroll;
