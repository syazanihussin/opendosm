'use client'

import { useState } from 'react'

import { NavbarProps } from './Navbar.types'

const Navbar = ({ title }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <>
      <nav className=" bg-gray-900 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-2">
                <span className="text-indigo-600 text-xl font-bold">{title}</span>
              </a>

              <div className="hidden sm:flex sm:items-center sm:gap-2">
                <a
                  href="#"
                  className="px-3 py-2 text-sm hover:bg-gray-100 hover:text-black rounded-md"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-sm hover:bg-gray-100  hover:text-black rounded-md"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-sm hover:bg-gray-100   hover:text-black rounded-md"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-sm hover:bg-gray-100  hover:text-black  rounded-md"
                >
                  Docs
                </a>
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hidden sm:inline-flex px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-500"
              >
                Get started
              </a>

              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-full"
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=64&auto=format"
                  />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow rounded-md text-sm">
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                      Profile
                    </a>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                      Settings
                    </a>
                    <a className="block px-4 py-2 text-red-600 hover:bg-gray-100" href="#">
                      Logout
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile button */}
              <button
                className="sm:hidden p-2 rounded-md hover:bg-gray-100"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="sm:hidden border-t border-gray-100">
            <div className="px-2 py-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-base">
                Home
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base">
                Features
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base">
                Pricing
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base">
                Docs
              </a>
            </div>
            <div className="px-5 pb-4 border-t border-gray-100">
              <a
                href="#"
                className="block w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-md"
              >
                Get started
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
