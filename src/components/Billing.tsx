'use client';

import React from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";


const Billing: React.FC = () => {
  const searchParams = useSearchParams();
  const carId = searchParams?.get("id") || "default-id"; // Fallback to default-id if id is missing

  return (
    <div className="w-full flex flex-col place-items-start bg-gray-100 min-h-screen p-8">
      
      <div className="w-[1440px] bg-white shadow-md rounded-lg">
        {/* Main Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Billing Info */}
          <div className="col-span-2 space-y-2">
            <div>
              <h2 className="text-lg font-semibold">Billing Info</h2>
              <p className="text-sm text-gray-500">Please enter your billing info</p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                required
                className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none"
                aria-label="Your Name"
              />
              <input
                type="tel"
                placeholder="Phone number"
                required
                className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none"
                aria-label="Phone Number"
              />
              <input
                type="text"
                placeholder="Address"
                required
                className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none md:col-span-2"
                aria-label="Address"
              />
              <input
                type="text"
                placeholder="Town or city"
                required
                className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none"
                aria-label="Town or City"
              />
            </form>
          </div>

          {/* Rental Info */}
          <div className="col-span-2">
            <div>
              <h2 className="text-lg font-semibold">Rental Info</h2>
              <p className="text-sm text-gray-500">Please select your rental date</p>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Pick-Up</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select
                    required
                    className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none"
                    aria-label="Pick-Up City"
                  >
                    <option value="">Select your city</option>
                    <option value="City1">City 1</option>
                    <option value="City2">City 2</option>
                  </select>
                  <input
                    type="date"
                    required
                    className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none"
                    aria-label="Pick-Up Date"
                  />
                  <select
                    required
                    className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none"
                    aria-label="Pick-Up Time"
                  >
                    <option value="">Select your time</option>
                    <option value="08:00">08:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Drop-Off</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select
                    required
                    className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none"
                    aria-label="Drop-Off City"
                  >
                    <option value="">Select your city</option>
                    <option value="City1">City 1</option>
                    <option value="City2">City 2</option>
                  </select>
                  <input
                    type="date"
                    required
                    className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none"
                    aria-label="Drop-Off Date"
                  />
                  <select
                    required
                    className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none"
                    aria-label="Drop-Off Time"
                  >
                    <option value="">Select your time</option>
                    <option value="08:00">08:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                  </select>
                </div>
              </div>
            </form>
          </div>

          {/* Rental Summary */}
          <div className="w-[400px] h-[560px] mt-0">
            <div>
              <h2 className="text-lg font-semibold">Rental Summary</h2>
              <p className="text-sm text-gray-500">Prices may change depending on the rental</p>
            </div>
            <div className="space-y-4 bg-gray-50 p-4 rounded-md border">
              <div className="flex items-center space-x-4">
                <Image
                  src="/car.png"
                  alt="Nissan GT-R"
                  width={64}
                  height={64}
                  className="object-cover rounded-md bg-blue-500"
                />
                <div>
                  <h3 className="text-sm font-semibold">Car ID: {carId}</h3>
                  <p className="text-xs text-gray-400">440+ Reviewer</p>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <p>Subtotal</p>
                <p>$80.00</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Tax</p>
                <p>$0.00</p>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Apply promo code"
                  className="flex-1 border border-gray-300 rounded-md p-2 text-sm outline-none"
                  aria-label="Promo Code"
                />
                <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 transition">
                  Apply now
                </button>
              </div>
              <div className="flex justify-between text-sm font-bold">
                <p>Total Rental Price</p>
                <p>$80.00</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Billing;