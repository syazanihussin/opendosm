import React from 'react'

const Sidebar = () => {
  return (
    <>
      <aside className="h-full w-64 space-y-4 rounded-3xl bg-gray-900 p-4 text-white">
        <nav className="flex flex-col space-y-2">
          <a href="/households" className="block rounded p-2 text-left hover:bg-gray-700">
            Household
          </a>

          <a href="/demography" className="block rounded p-2 text-left hover:bg-gray-700">
            Demography
          </a>

          <a href="" className="block rounded p-2 text-left hover:bg-gray-700">
            Profile
          </a>
          <a href="" className="block rounded p-2 text-left hover:bg-gray-700">
            Income
          </a>
          <a href="" className="block rounded p-2 text-left hover:bg-gray-700">
            Poverty
          </a>

          <a href="" className="block rounded p-2 text-left hover:bg-gray-700">
            Inequality
          </a>
          <a href="" className="block rounded p-2 text-left hover:bg-gray-700">
            Expenditure
          </a>

          <a href="" className="block rounded p-2 text-left hover:bg-gray-700">
            Basic Amenities
          </a>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
