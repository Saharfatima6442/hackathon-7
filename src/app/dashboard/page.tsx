import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FD] flex flex-col">
      <Navbar />

      <div className="flex p-6 gap-6">
        {/* Sidebar */}
        <aside className="w-1/5 bg-white rounded-2xl shadow-md p-6">
          <div>
            <h3 className="text-gray-400 uppercase text-sm font-semibold mb-6">Main Menu</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-white hover: bg-blue-500 font-semibold">
                <span>Dashboard</span>
              </li>
              <li className="flex items-center space-x-4 text-gray-600 hover:text-blue-600">
                <span>Car Rent</span>
              </li>
              <li className="flex items-center space-x-4 text-gray-600 hover:text-blue-600">
                <span>Insight</span>
              </li>
              <li className="flex items-center space-x-4 text-gray-600 hover:text-blue-600">
                <span>Reimburse</span>
              </li>
              <li className="flex items-center space-x-4 text-gray-600 hover:text-blue-600">
                <span>Inbox</span>
              </li>
              <li className="flex items-center space-x-4 text-gray-600 hover:text-blue-600">
                <span>Calendar</span>
              </li>
            </ul>
            <h3 className="text-gray-400 uppercase text-sm font-semibold mt-10 mb-6">Preferences</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4 text-gray-600 hover:text-blue-600">
                <span>Settings</span>
              </li>
              <li className="flex items-center space-x-4 text-gray-600 hover:text-blue-600">
                <span>Help & Center</span>
              </li>
              <li className="flex items-center space-x-4 text-gray-600 hover:text-blue-600">
                <span>Dark Mode</span>
              </li>
              <li className="flex items-center space-x-4 text-gray-600 hover:text-blue-600">
                <span>Log Out</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Details Rental */}
            <div className="bg-white rounded-2xl shadow-md p-6 col-span-2">
              <h2 className="font-semibold text-lg text-gray-700 mb-4">Details Rental</h2>
              <div className="relative w-full h-64 rounded-xl overflow-hidden">
                {/* Google Map Container */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.09763926102!2d-122.4312977!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8b1837c5%3A0x5aa3e72c8f1c49db!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1688012108053!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="rounded-xl"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex justify-between mt-6">
                <div>
                  <h3 className="font-semibold text-gray-700">Nissan GT – R</h3>
                  <p className="text-gray-500 text-sm">Sport Car</p>
                </div>
                <p className="text-gray-500">#9761</p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-700">Pick-Up</h4>
                  <p className="text-gray-500">Kota Semarang</p>
                  <p className="text-gray-500">20 July 2022</p>
                  <p className="text-gray-500">07:00</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Drop-Off</h4>
                  <p className="text-gray-500">Kota Semarang</p>
                  <p className="text-gray-500">21 July 2022</p>
                  <p className="text-gray-500">01:00</p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-gray-700">Total Rental Price</h4>
                <p className="text-blue-600 text-xl">$80.00</p>
              </div>
            </div>

            {/* Top 5 Car Rental */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="font-semibold text-lg text-gray-700 mb-4">Top 5 Car Rental</h2>
              <div className="relative w-full h-64 rounded-xl overflow-hidden">
                <Image
                  src="/chart.png" // Replace with the actual image path
                  alt="Top 5 Car Rental Chart"
                  width={400}
                  height={256}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="font-semibold text-lg text-gray-700 mb-4">Recent Transactions</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/Image 8.png"
                    alt="Nissan GT – R"
                    width={150}
                    height={200}
                    className="rounded-lg bg-blue-600"
                  />
                  <div>
                    <p className="font-semibold text-gray-700">Nissan GT – R</p>
                    <p className="text-sm text-gray-500">Sport Car</p>
                  </div>
                </div>
                <p className="text-gray-700">$80.00</p>
              </li>
              {/* Add more items here */}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
