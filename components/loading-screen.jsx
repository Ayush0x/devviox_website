"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prevProgress + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-primary animate-pulse">Devviox</h1>
          <p className="text-gray-600 mt-2 animate-fade-in-up">Bringing your ideas to life</p>
        </div>

        {/* Loading Animation */}
        <div className="relative w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto mb-4">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-purple-400 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>

        {/* Progress Text */}
        <p className="text-sm text-gray-500">{Math.round(progress)}%</p>

        {/* Floating Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
