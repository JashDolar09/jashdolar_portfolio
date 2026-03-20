"use client"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-float-medium"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-pink-200 rounded-full opacity-20 animate-float-fast"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-green-200 rounded-full opacity-20 animate-float-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-yellow-200 rounded-full opacity-20 animate-float-medium"></div>
      <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-indigo-200 rounded-full opacity-20 animate-float-fast"></div>
    </div>
  )
}
