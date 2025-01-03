import React from "react";

const Billing: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl w-full bg-white shadow-md rounded-lg p-8">
        {/* Main Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Billing Info */}
          <div className="col-span-2 space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Billing Info</h2>
              <p className="text-sm text-gray-500">Please enter your billing info</p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none"
              />
              <input
                type="text"
                placeholder="Address"
                className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none md:col-span-2"
              />
              <input
                type="text"
                placeholder="Town or city"
                className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none"
              />
            </form>
          </div>

          {/* Rental Info */}
          <div className="col-span-2 space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Rental Info</h2>
              <p className="text-sm text-gray-500">Please select your rental date</p>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Pick - Up</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none">
                    <option>Select your city</option>
                  </select>
                  <input
                    type="date"
                    className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none"
                  />
                  <select className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none">
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Drop - Off</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none">
                    <option>Select your city</option>
                  </select>
                  <input
                    type="date"
                    className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none"
                  />
                  <select className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 outline-none">
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
            </form>
          </div>

          {/* Rental Summary */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Rental Summary</h2>
              <p className="text-sm text-gray-500">Prices may change depending on the rental</p>
            </div>
            <div className="space-y-4 bg-gray-50 p-4 rounded-md border">
              <div className="flex items-center space-x-4">
                <img
                  src="/car.png"
                  alt="Nissan GT - R"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-sm font-semibold">Nissan GT – R</h3>
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
                />
                <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md">
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
