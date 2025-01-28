"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const RecommendationCarSection: React.FC = () => {
  const router = useRouter();

  const handleShowMoreCars = () => {
    router.push("/showMoreCars");
  };

  const cars = [
    {
      id: 1,
      name: "All New Rush",
      type: "SUV",
      image: "/Car (4).png",
      price: "$72.00",
      discountPrice: "$80.00",
    },
    {
      id: 2,
      name: "CR-V",
      type: "SUV",
      image: "/Car (5).png",
      price: "$80.00",
      discountPrice: "",
    },
    {
      id: 3,
      name: "All New Terios",
      type: "SUV",
      image: "/Car (6).png",
      price: "$74.00",
      discountPrice: "$90.00",
    },
    {
      id: 4,
      name: "CR-V",
      type: "SUV",
      image: "/Car (7).png",
      price: "$80.00",
      discountPrice: "",
    },
    {
      id: 5,
      name: "MG ZX Exclusive",
      type: "Hatchback",
      image: "/Car (8).png",
      price: "$76.00",
      discountPrice: "$80.00",
    },
    {
      id: 6,
      name: "New MG ZS",
      type: "SUV",
      image: "/Car (9).png",
      price: "$80.00",
      discountPrice: "",
    },
    {
      id: 7,
      name: "MG ZX Excite",
      type: "Hatchback",
      image: "/Car (10).png",
      price: "$74.00",
      discountPrice: "$90.00",
    },
    {
      id: 8,
      name: "New MG ZS",
      type: "SUV",
      image: "/Car (11).png",
      price: "$80.00",
      discountPrice: "",
    },
  ];

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recommendation Cars</h2>
          <span className="text-gray-500 text-sm">12 Cars</span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col"
            >
              {/* Heart Icon */}
              <div className="flex justify-end">
                <button
                  className="text-gray-400 hover:text-red-500"
                  aria-label="Add to Favorites"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 20.25l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                    />
                  </svg>
                </button>
              </div>

              {/* Car Image */}
              <Image
                src={car.image}
                alt={car.name}
                width={300}
                height={200}
                className="rounded-md object-contain mb-4"
                layout="intrinsic"
              />

              {/* Car Name and Type */}
              <h3 className="text-lg font-semibold text-gray-900">{car.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{car.type}</p>

              {/* Features */}
              <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                <span>🚗</span>
                <span>Manual</span>
                <span>6 People</span>
              </div>

              {/* Price and Button */}
              <div className="flex justify-between items-center mt-auto">
                <div>
                  <span className="text-blue-600 font-bold text-lg">
                    {car.price}
                  </span>
                  {car.discountPrice && (
                    <span className="text-sm text-gray-400 line-through ml-2">
                      {car.discountPrice}
                    </span>
                  )}
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMoreCars}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 text-sm transition"
          >
            Show more cars
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecommendationCarSection;
