"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface EducationRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function EducationReveal({ children, className = "", delay = 0 }: EducationRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // It entered the screen (at least 20% visible)
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0", "scale-100", "blur-none")
              entry.target.classList.remove("opacity-0", "translate-y-24", "-translate-y-24", "scale-90", "scale-95", "blur-sm")
            }, delay)
          } else {
            // It left the screen. Let's detect if it went Up or Down!
            if (entry.boundingClientRect.y < 0) {
              // It went UP: User scrolled down past it.
              // Apply the "goes up smooth animation" matching the prompt.
              entry.target.classList.add("opacity-0", "-translate-y-24", "scale-95", "blur-sm")
              entry.target.classList.remove("opacity-100", "translate-y-0", "translate-y-24", "scale-100", "blur-none")
            } else {
              // It went DOWN: User scrolled up past it.
              // Reset to normal bottom-hidden state.
              entry.target.classList.add("opacity-0", "translate-y-24", "scale-90")
              entry.target.classList.remove("opacity-100", "translate-y-0", "-translate-y-24", "scale-100", "scale-95", "blur-sm", "blur-none")
            }
          }
        })
      },
      // Trigger when 20% is on screen (starts to enter) and when 80% is off screen (starts to exit fully)
      { threshold: 0.2 } 
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div 
      ref={elementRef} 
      className={`opacity-0 translate-y-24 scale-90 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${className}`}
    >
      {children}
    </div>
  )
}
