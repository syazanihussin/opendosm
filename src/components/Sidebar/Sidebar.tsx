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

          <button className="rounded p-2 text-left hover:bg-gray-700">Profile</button>
          <button className="rounded p-2 text-left hover:bg-gray-700">Income</button>
          <button className="rounded p-2 text-left hover:bg-gray-700">Poverty</button>
          <button className="rounded p-2 text-left hover:bg-gray-700">Inequality</button>
          <button className="rounded p-2 text-left hover:bg-gray-700">Expenditure</button>
          <button className="rounded p-2 text-left hover:bg-gray-700">Basic Amenities</button>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
