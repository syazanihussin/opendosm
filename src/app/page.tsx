'use client'
import { useState } from 'react'

import Button from '@/components/Button/Button'
import Card from '@/components/Card/Card'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Sidebar from '@/components/Sidebar/Sidebar'

export default function Home() {
  return (
    <>
      <Navbar title="brandopendosm" />

      <main className="min-h-screen w-full bg-gray-100 flex">
        <aside className="w-64 h-screen bg-gray-900">
          <Sidebar />
        </aside>

        <section className="p-10 w-full h-full bg-blue-500">
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

          <div className="grid grid-cols-5 space-x-4">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <p className="font-semibold">Pending Pickup</p>
              <p className="text-2xl font-bold">0</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <p className="font-semibold">Pending Pickup</p>
              <p className="text-2xl font-bold">0</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <p className="font-semibold">Pending Pickup</p>
              <p className="text-2xl font-bold">0</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <p className="font-semibold">Pending Pickup</p>
              <p className="text-2xl font-bold">0</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
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
