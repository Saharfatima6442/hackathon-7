import Image from "next/image";

const PopularCarSection: React.FC = () => {
  const cars = [
    {
      id: 1,
      name: "Koenigsegg",
      type: "Sport",
      image: "/car.png",
      price: "$99.00",
      discountPrice: "",
    },
    {
      id: 2,
      name: "Nissan GT-R",
      type: "Sport",
      image: "/car (1).png",
      price: "$80.00",
      discountPrice: "$100.00",
    },
    {
      id: 3,
      name: "Rolls-Royce",
      type: "Sedan",
      image: "/Car (2).png",
      price: "$96.00",
      discountPrice: "",
    },
    {
      id: 4,
      name: "Nissan GT-R",
      type: "Sport",
      image: "/Car (3).png",
      price: "$80.00",
      discountPrice: "$100.00",
    },
  ];

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Popular Cars</h2>
          <a
            href="#"
            className="text-blue-500 hover:underline text-sm font-medium"
          >
            View All
          </a>
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
                  aria-label="Add to Favorites"
                  className="text-gray-400 hover:text-red-500"
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
              <div className="mb-4">
                <Image
                  src={car.image}
                  alt={car.name}
                  width={300}
                  height={200}
                  className="rounded-md object-contain"
                  layout="intrinsic"
                />
              </div>

              {/* Car Name and Type */}
              <h3 className="text-lg font-semibold text-gray-900">{car.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{car.type}</p>

              {/* Features */}
              <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                <span>🚗</span>
                <span>Manual</span>
                <span>2 People</span>
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
      </div>
    </section>
  );
};

export default PopularCarSection;
