"use client";
import { Check } from "lucide-react";
import { useScrollAnimation, useViewportPosition } from "@/hooks/useViewport";

interface FeatureCardProps {
    title: string;
    description: string;
    delay? : number;
}

export const FeatureCard = ({ title, description, delay = 0} : FeatureCardProps) => {
    // scroll visibility animation
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true, rootMargin: "0px" });
    const [posRef, position] = useViewportPosition();
    
    const setRefs = (element: HTMLElement | null) => {
        ref.current = element;
        posRef.current = element;
    };

  return (
    <div
      ref={setRefs}
      className={`transform transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`}}
    >
      <div className="flex items-start space-x-3">
        <Check className="w-6 h-6 flex-shrink-0 mt-1 text-emerald-50" />
        <div>
          <h4 className="text-xl font-semibold mb-3">{title}</h4>
          <p className="opacity-90">{description}</p>
        </div>
      </div>
    </div>
    );
}
 
  

  
  