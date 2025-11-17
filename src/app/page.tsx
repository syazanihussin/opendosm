import Button from '@/components/button/Button'
import Card from '@/components/card/Card'

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex">
        <aside className="w-64 bg-gray-900 text-white flex flex-col p-4 space-y-4">
          <h1 className="text-2xl font-bold mb-4">OPENDOSM</h1>
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
        {/* Main Content */}
        <main className="flex-1 p-6">
          <Card>
            <div>
              <h2 className="text-black text-2xl font-bold">Hey there!</h2>
              <p className="text-gray-600">blablablad</p>
            </div>

            <div className="space-x-4">
              <Button variant="secondary" label="cancel" />
            </div>
          </Card>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold mb-2 text-green-600">Collected from Customer</h3>
              <p className="text-2xl font-bold">RM0.00</p>
              <p className="text-gray-500 text-sm">0 of 0 parcels</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold mb-2 text-yellow-600">Yet to Collect</h3>
              <p className="text-2xl font-bold">RM0.00</p>
              <p className="text-gray-500 text-sm">0 of 0 parcels</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold mb-2 text-red-600">Failed to Collect</h3>
              <p className="text-2xl font-bold">RM0.00</p>
              <p className="text-gray-500 text-sm">0 of 0 parcels</p>
            </div>
          </div>

          {/* Parcel Review */}
          <h3 className="font-semibold text-lg mb-3">Parcel Review</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <p className="font-semibold">Pending Pickup</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
        </main>{' '}
        {/* ✅ Closing MAIN */}
        {/* 
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Your Company. All rights reserved.
              </p>
            </div>
          </footer> */}
      </div>{' '}
      {/* ✅ Closing MAIN WRAPPER */}
    </>
  )
}

export default Home
