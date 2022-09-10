import React from 'react'

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]">
    <div className="flex gap-5 text-4xl semi-bold sm:text-3xl">
        <h1 className="text-secondary first-letter">D</h1>
        <h1 className="text-white middle-letter">S</h1>
        <h1 className="text-tertiary last-letter">M</h1>
    </div></div>
  )
}

export default Loader