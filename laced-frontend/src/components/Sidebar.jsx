import React from 'react'
import { Home, Image, Settings, Folder, Sparkles } from 'lucide-react'

const Sidebar = () => {
  return (
    <aside className="bg-wine text-white w-20 lg:w-64 h-full flex flex-col items-center lg:items-start py-4 px-2 space-y-6">
      <h1 className="hidden lg:block text-2xl font-playfair px-2">Laced</h1>
      <nav className="flex flex-col items-center lg:items-start space-y-4 w-full">
        <SidebarItem icon={<Home size={24} />} label="Home" />
        <SidebarItem icon={<Sparkles size={24} />} label="Generate" />
        <SidebarItem icon={<Image size={24} />} label="Models" />
        <SidebarItem icon={<Folder size={24} />} label="History" />
        <SidebarItem icon={<Settings size={24} />} label="Settings" />
      </nav>
    </aside>
  )
}

const SidebarItem = ({ icon, label }) => {
  return (
    <button className="flex items-center w-full gap-3 px-3 py-2 rounded-lg hover:bg-gold/20 transition text-sm lg:text-base">
      {icon}
      <span className="hidden lg:inline">{label}</span>
    </button>
  )
}

export default Sidebar
