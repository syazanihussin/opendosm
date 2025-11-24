import React from 'react'

const Sidebar = () => {
  return (
    <>
      <aside className="w-64 h-full rounded-3xl bg-gray-900 text-white   p-4 space-y-4">
        <nav className="flex flex-col space-y-2">
          <a href="/households" className="text-left hover:bg-gray-700 p-2 rounded block">
            Household
          </a>

          <a href="/demography" className="text-left hover:bg-gray-700 p-2 rounded block">
            Demography
          </a>

          <button className="text-left hover:bg-gray-700 p-2 rounded">Profile</button>
          <button className="text-left hover:bg-gray-700 p-2 rounded">Income</button>
          <button className="text-left hover:bg-gray-700 p-2 rounded">Poverty</button>
          <button className="text-left hover:bg-gray-700 p-2 rounded">Inequality</button>
          <button className="text-left hover:bg-gray-700 p-2 rounded">Expenditure</button>
          <button className="text-left hover:bg-gray-700 p-2 rounded">Basic Amenities</button>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
