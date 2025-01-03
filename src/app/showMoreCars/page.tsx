"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ShowMoreCars: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedCapacity, setSelectedCapacity] = useState<string[]>([]);
  const router = useRouter();

  const cars = [
    {
      id: 1,
      name: "Koenigsegg",
      type: "Sport",
      image: "/image 8.png",
      price: "$99.00",
      capacity: "2 People",
      discountPrice: "",
    },
    {
      id: 2,
      name: "Nissan GT-R",
      type: "Sport",
      image: "/car (1).png",
      price: "$80.00",
      capacity: "2 People",
      discountPrice: "$100.00",
    },
    {
      id: 3,
      name: "Rolls-Royce",
      type: "Sport",
      image: "/Car (2).png",
      price: "$96.00",
      capacity: "4 People",
      discountPrice: "",
    },
    {
      id: 4,
      name: "All New Rush",
      type: "SUV",
      image: "/Car (4).png",
      price: "$72.00",
      capacity: "6 People",
      discountPrice: "$80.00",
    },
    {
      id: 5,
      name: "CR-V",
      type: "SUV",
      image: "/Car (5).png",
      price: "$80.00",
      capacity: "6 People",
      discountPrice: "",
    },
    {
      id: 6,
      name: "All New Terios",
      type: "SUV",
      image: "/Car (6).png",
      price: "$74.00",
      capacity: "8 or More",
      discountPrice: "$90.00",
    },
    {
      id: 7,
      name: "MGZX Exclusive",
      type: "Hatchback",
      image: "/Car (8).png",
      price: "$76.00",
      capacity: "4 people",
      discountPrice: "$80.00",
    },
    {
      id: 8,
      name: "New MGZS",
      type: "SUV",
      image: "/Car (9).png",
      price: "$80.00",
      capacity: "6 people",
      discountPrice: "",
    },
    {
      id: 9,
      name: "MGZX Excite",
      type: "Hatchback",
      image: "/Car (10).png",
      price: "$74.00",
      capacity: "4 people",
      discountPrice: "",
    },
  ];

  const handleRentNow = (id: number) => {
    // Navigate to the rent page with the car ID
    router.push(`/rent/${id}`);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleCapacityChange = (capacity: string) => {
    setSelectedCapacity((prev) =>
      prev.includes(capacity)
        ? prev.filter((c) => c !== capacity)
        : [...prev, capacity]
    );
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 p-4 bg-white border-r">
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Type</h2>
            {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
              (type) => (
                <div key={type} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedType.includes(type)}
                    onChange={() => handleTypeChange(type)}
                    className="mr-2"
                  />
                  <label>{type}</label>
                </div>
              )
            )}
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Capacity</h2>
            {["2 People", "4 People", "6 People", "8 or More"].map(
              (capacity) => (
                <div key={capacity} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedCapacity.includes(capacity)}
                    onChange={() => handleCapacityChange(capacity)}
                    className="mr-2"
                  />
                  <label>{capacity}</label>
                </div>
              )
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-6">
          <h1 className="text-2xl font-bold">Recommended Cars</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars
              .filter(
                (car) =>
                  (selectedType.length === 0 ||
                    selectedType.includes(car.type)) &&
                  (selectedCapacity.length === 0 ||
                    selectedCapacity.includes(car.capacity))
              )
              .map((car) => (
                <div
                  key={car.id}
                  className="bg-white rounded-lg shadow-md p-4 flex flex-col"
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-40 object-contain rounded-md mb-4"
                  />
                  <h2 className="text-lg font-bold">{car.name}</h2>
                  <p className="text-sm text-gray-500">{car.type}</p>
                  <p className="text-sm text-gray-500">{car.capacity}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-600">
                      {car.price}
                    </span>
                    {car.discountPrice && (
                      <span className="text-sm line-through text-gray-400">
                        {car.discountPrice}
                      </span>
                    )}
                    <button
                      onClick={() => handleRentNow(car.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                      Rent Now
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ShowMoreCars;
