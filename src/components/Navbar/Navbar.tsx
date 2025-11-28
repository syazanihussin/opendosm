'use client'

import { useState } from 'react'

import { NavbarProps } from './Navbar.types'

const Navbar = ({ title }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <>
      <nav className="border-b border-gray-200 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-2">
                <span className="text-xl font-bold text-indigo-600">{title}</span>
              </a>

              <div className="hidden sm:flex sm:items-center sm:gap-2">
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm hover:bg-gray-100 hover:text-black"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm hover:bg-gray-100 hover:text-black"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm hover:bg-gray-100 hover:text-black"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm hover:bg-gray-100 hover:text-black"
                >
                  Docs
                </a>
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hidden rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-500 sm:inline-flex"
              >
                Get started
              </a>

              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 rounded-full p-1 hover:bg-gray-100"
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=64&auto=format"
                  />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-40 rounded-md bg-white text-sm shadow">
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
                className="rounded-md p-2 hover:bg-gray-100 sm:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-gray-100 sm:hidden">
            <div className="space-y-1 px-2 py-3">
              <a href="#" className="block rounded-md px-3 py-2 text-base">
                Home
              </a>
              <a href="#" className="block rounded-md px-3 py-2 text-base">
                Features
              </a>
              <a href="#" className="block rounded-md px-3 py-2 text-base">
                Pricing
              </a>
              <a href="#" className="block rounded-md px-3 py-2 text-base">
                Docs
              </a>
            </div>
            <div className="border-t border-gray-100 px-5 pb-4">
              <a
                href="#"
                className="block w-full rounded-md bg-indigo-600 px-4 py-2 text-center text-white"
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
