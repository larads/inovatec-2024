'use client'
import { useState } from "react"
import { Home, Settings, User, Camera, Menu } from "lucide-react"

export default function Drawer() {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className={`bg-[#18507E] relative transition-all duration-300 ${isExpanded ? 'w-64' : 'w-16'} h-screen p-4`}>
            <button onClick={toggleSidebar} className="text-white hover:text-zinc-400 p-2 rounded-full items-center ">
                <Menu size={24} />
            </button>
            <div className={`flex flex-col space-y-6 pt-16 ${isExpanded ? 'items-start' : 'items-center'}`}>
                <a href="/pages/home" className={`flex ${isExpanded ? 'items-center space-x-4' : 'justify-center'} p-2 text-white hover:border-b-2 hover:border-gray-400`}>
                    <Home size={24} />
                    {isExpanded && <span className="ml-4">Home</span>}
                </a>

                <a href="/pages/settings" className={`flex ${isExpanded ? 'items-center space-x-4' : 'justify-center'} p-2 text-white hover:border-b-2 hover:border-gray-400`}>
                    <Settings size={24} />
                    {isExpanded && <span className="ml-4">Settings</span>}
                </a>

                <a href="/pages/transmissions" className={`flex ${isExpanded ? 'items-center space-x-4' : 'justify-center'} p-2 text-white hover:border-b-2 hover:border-gray-400`}>
                    <Camera size={24} />
                    {isExpanded && <span className="ml-4">Transmições</span>}
                </a>

                <a href="/pages/profile" className={`flex ${isExpanded ? 'items-center space-x-4' : 'justify-center'} p-2 text-white hover:border-b-2 hover:border-gray-400`}>
                    <User size={24} />
                    {isExpanded && <span className="ml-4">Profile</span>}
                </a>
            </div>
        </div>
    )
}
