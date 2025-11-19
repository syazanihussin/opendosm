import React from 'react'

export const Sidebar = () => {
  return (
    <>
      <aside className="w-64 h-full rounded-3xl bg-gray-900 text-white   p-4 space-y-4">
        <nav className="flex flex-col space-y-2">
          <button className="text-left hover:bg-gray-700 p-2 rounded">Household</button>
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
