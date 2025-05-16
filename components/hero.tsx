"use client"

import React, { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [count, setCount] = useState(0)
  const phrases = [
    "Production grade React applications",
    "Full-stack web applications",
    "Server-side rendered apps",
    "Static websites",
    "Enterprise applications",
    "Hybrid applications"
  ]
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count + 1) % phrases.length)
    }, 3000)
    return () => clearTimeout(timer)
  }, [count, phrases.length])
  
  return (
    <div className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 flex justify-center">
            <svg height="32" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12">
              <mask id="mask0_408_134" style={{ maskType: 'alpha' }} x="0" y="0" width="180" height="180">
                <circle cx="90" cy="90" r="90" fill="black" />
              </mask>
              <g mask="url(#mask0_408_134)">
                <circle cx="90" cy="90" r="87" fill="black" stroke="white" strokeWidth="6" />
                <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_134)" />
                <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_134)" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_408_134" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_408_134" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            The React Framework for the Web
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Next.js by Vercel is the framework for building {" "}
            <span className="relative inline-flex overflow-hidden">
              <span 
                className="absolute transition-transform duration-1000 ease-in-out"
                style={{ 
                  transform: `translateY(${-100 * count}%)`, 
                }}
              >
                {phrases.map((phrase, i) => (
                  <span key={i} className="block h-8">
                    {phrase}
                  </span>
                ))}
              </span>
            </span>
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="gap-1">
              Get Started
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn Next.js
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
      
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
    </div>
  )
}