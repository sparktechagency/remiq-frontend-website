"use client"

import type React from "react"

import { ShoppingCart, Bell, SearchIcon } from "lucide-react"
import { useState } from "react"
import { Input, } from 'antd';
import { LoginModal } from "../auth/Login/LoginModal"
import { SignupModal } from "../auth/Login/SignupModal"
import { SearchProps } from "antd/es/input"
import { FaRegUserCircle } from "react-icons/fa";


export function Header() {
    const [showLogin, setShowLogin] = useState(false)
    const [showSignup, setShowSignup] = useState(false)

    const handleSwitchToSignup = () => {
        setShowLogin(false)
        setShowSignup(true)
    }

    const handleSwitchToLogin = () => {
        setShowSignup(false)
        setShowLogin(true)
    }

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);


    return (
        <div className="sticky top-0 z-50">
            <header className="flex justify-center backdrop-blur-sm border-b border-slate-800 shadow-sm bg-[#122D42]">
                <div className="w-full max-w-7xl px-4 gap-12 sm:px-6 lg:px-8 h-16 flex items-center relative">
                    {/* Logo */}
                    <div className="flex items-center absolute left-4 sm:left-20">
                        <h1 className="text-xl font-bold text-white tracking-tight hover:text-purple-400 transition-colors cursor-pointer">
                            remiq
                        </h1>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-sm mx-auto pl-20 sm:pl-0">
                        <Input
                            placeholder="Search..."
                            size="large"
                            prefix={<SearchIcon className="text-gray-100 w-4 h-4" />}
                            className="headerSearch rounded-full !bg-[#122D42] !text-white"
                            style={{ width: '100%' }}
                            onPressEnter={(e) => onSearch((e.target as HTMLInputElement).value)}
                        />
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center gap-3 ml-auto">
                        <button className="relative p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-slate-800">
                            <ShoppingCart className="w-5 h-5" />
                        </button>
                        <button className="relative p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-slate-800">
                            <Bell className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-slate-800">
                            <FaRegUserCircle className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Auth Modals */}
            <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} onSwitchToSignup={handleSwitchToSignup} />
            <SignupModal isOpen={showSignup} onClose={() => setShowSignup(false)} onSwitchToLogin={handleSwitchToLogin} />
        </div>
    )
}
