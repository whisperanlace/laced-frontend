import React from 'react'

const Topbar = () => {
  return (
    <header className="bg-ivory shadow-sm text-black px-4 py-2 flex justify-between items-center border-b border-gold/40">
      <div className="text-sm font-semibold">Current Model: RealisticVision v6</div>
      <div className="flex gap-3">
        <button className="text-sm px-3 py-1 rounded border border-gold hover:bg-gold hover:text-white transition">Refresh</button>
        <button className="text-sm px-3 py-1 rounded border border-gold hover:bg-gold hover:text-white transition">Export</button>
      </div>
    </header>
  )
}

export default Topbar
