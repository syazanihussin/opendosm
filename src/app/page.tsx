import Image from "next/image";

// <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//   <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

//   </main>
// </div>

export default function Home() {
  return (

    <>
      <div className="min-h-screen bg-gray-100 flex">

        <aside className="w-64 bg-gray-900 text-white flex flex-col p-4 space-y-4">
          <h1 className="text-2xl font-bold mb-4">ninjavan</h1>
          <nav className="flex flex-col space-y-2">
            <button className="text-left hover:bg-gray-700 p-2 rounded">Create Order</button>
            <button className="text-left hover:bg-gray-700 p-2 rounded">Tracking</button>
            <button className="text-left hover:bg-gray-700 p-2 rounded">Order History</button>
            <button className="text-left hover:bg-gray-700 p-2 rounded">Pickups</button>
            <button className="text-left hover:bg-gray-700 p-2 rounded">Reports</button>
            <button className="text-left hover:bg-gray-700 p-2 rounded">Settings</button>
            <button className="text-left hover:bg-gray-700 p-2 rounded">Help Desk</button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">

          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <input
              type="text"
              placeholder="Enter a Tracking ID, Name, or Phone Number"
              className="w-1/2 p-2 border rounded-lg"
            />
            <div className="font-semibold">Yi Xian Low (MY)</div>
          </div>

          {/* Welcome Card */}
          <div className="bg-white p-6 rounded-xl shadow mb-6 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Hey there!</h2>
              <p className="text-gray-600">Ready to ship some parcels?</p>
            </div>

            <div className="space-x-4">
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg">NEW ORDER</button>
              <button className="bg-gray-800 text-white px-6 py-2 rounded-lg">NEW PICKUP</button>
            </div>
          </div>

          {/* Info Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-semibold">Information for</span>
              <select className="p-2 border rounded-lg">
                <option>This Week (2025-10-27 — 2025-11-03)</option>
              </select>
            </div>

            {/* COD Cards */}
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
          </div>

        </main>  {/* ✅ Closing MAIN */}

      </div>      {/* ✅ Closing MAIN WRAPPER */}

    </>
  );
}
