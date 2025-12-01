'use client'

import { Button, Card, Footer, Navbar, Sidebar } from '@root/components'

const Home = () => {
  return (
    <>
      <Navbar title="brandopendosm" />

      <main className="flex min-h-screen w-full bg-gray-100">
        <aside className="h-screen w-64 bg-gray-900">
          <Sidebar />
        </aside>

        <section hidden className="h-full w-full bg-blue-500 p-10">
          <Card>
            <div>
              <h2 className="text-2xl font-bold text-black">Hey there!</h2>
              <p className="text-gray-600">asasasasa sasasyahmie</p>
            </div>

            <div className="space-x-4">
              <Button variant="secondary" label="cancel" />
            </div>
          </Card>

          <div className="mb-6 grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-white p-4 shadow">
              <h3 className="mb-2 font-semibold text-green-600">Collected from Customer</h3>
              <p className="text-2xl font-bold">RM0.00</p>
              <p className="text-sm text-gray-500">0 of 0 parcels</p>
            </div>

            <div className="rounded-xl bg-white p-4 shadow">
              <h3 className="mb-2 font-semibold text-yellow-600">Yet to Collect</h3>
              <p className="text-2xl font-bold">RM0.00</p>
              <p className="text-sm text-gray-500">0 of 0 parcels</p>
            </div>

            <div className="rounded-xl bg-white p-4 shadow">
              <h3 className="mb-2 font-semibold text-red-600">Failed to Collect</h3>
              <p className="text-2xl font-bold">RM0.00</p>
              <p className="text-sm text-gray-500">0 of 0 parcels</p>
            </div>
          </div>

          <div className="grid grid-cols-5 space-x-4">
            <div className="rounded-xl bg-white p-4 text-center shadow">
              <p className="font-semibold">Pending Pickup</p>
              <p className="text-2xl font-bold">0</p>
            </div>

            <div className="rounded-xl bg-white p-4 text-center shadow">
              <p className="font-semibold">Pending Pickup</p>
              <p className="text-2xl font-bold">0</p>
            </div>

            <div className="rounded-xl bg-white p-4 text-center shadow">
              <p className="font-semibold">Pending Pickup</p>
              <p className="text-2xl font-bold">0</p>
            </div>

            <div className="rounded-xl bg-white p-4 text-center shadow">
              <p className="font-semibold">Pending Pickup</p>
              <p className="text-2xl font-bold">0</p>
            </div>

            <div className="rounded-xl bg-white p-4 text-center shadow">
              <p className="font-semibold">Pending Pickup</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default Home
