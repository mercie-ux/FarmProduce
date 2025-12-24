// File: hooks/useViewportHooks.js
import { useState, useEffect, useRef } from 'react';

/**
 * Advanced Scroll Animation Hook with Viewport Detection
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Percentage of element that must be visible (0-1)
 * @param {boolean} options.triggerOnce - Whether animation should trigger only once
 * @param {string} options.rootMargin - Margin around the root element
 * @returns {Array} [ref, isVisible] - Reference to attach to element and visibility state
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px'
  } = options;
  
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasAnimated(true);
          }
        } else if (!triggerOnce && hasAnimated) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce, rootMargin, hasAnimated]);

  return [ref, isVisible];
};

/**
 * Viewport Position Hook
 * Tracks real-time position and visibility percentage of an element
 * @returns {Array} [ref, position] - Reference and position object with viewport data
 */
export const useViewportPosition = () => {
  const [position, setPosition] = useState({
    inViewport: false,
    percentageVisible: 0,
    fromTop: 0,
    fromBottom: 0
  });
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const inViewport = rect.top < windowHeight && rect.bottom > 0;
      
      let percentageVisible = 0;
      if (inViewport) {
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        percentageVisible = (visibleHeight / rect.height) * 100;
      }
      
      const fromTop = rect.top;
      const fromBottom = windowHeight - rect.bottom;

      setPosition({
        inViewport,
        percentageVisible: Math.round(percentageVisible),
        fromTop: Math.round(fromTop),
        fromBottom: Math.round(fromBottom)
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return [ref, position];
};