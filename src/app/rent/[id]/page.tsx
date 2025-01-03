"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import CarCard from "@/components/CarCard";
import { useRouter } from "next/navigation";
import Billing from "@/app/rental/[billing]/page";

const CarDetails: React.FC = () => {
  const { id } = useParams(); // Dynamic ID from URL
  const handleRentNow = () => {
    router.push(`/rent/billing?id=${carDetails.id}`);
  };
  const router = useRouter();

  

  const carDetails = {
    id,
    name: "Nissan GT-R",
    type: "Sport",
    image: "/image 8.png",
    price: "$80.00",
    capacity: "2 Person",
    transmission: "Manual",
    fuel: "Gasoline",
    engine: "70L",
    description:
      "NISMO has become the embodiment of Nissan’s outstanding performance, inspired by the most unforgiving proving ground, the 'race track'.",
    discountPrice: "$100.00",
    thumbnails: ["/View 1.png", "/View 2.png", "/View 3.png"],
  };

  const reviews = [
    {
      name: "Alex Stanton",
      date: "21 July 2023",
      review:
        "Safety and comfort were excellent in this Nissan GT-R. Perfect hire car for a sporty ride. I loved it!",
      rating: 5,
    },
    {
      name: "Skylar Dias",
      date: "20 July 2023",
      review:
        "The driving experience of this car was remarkable. Highly recommend for anyone seeking thrill and speed.",
      rating: 4,
    },
  ];

  const recommendedCars = [
    {
      id: 1,
      name: "Koenigsegg",
      type: "Sport",
      image: "/car.png",
      price: "$99.00",
      capacity: "",
    },
    {
      id: 2,
      name: "Nissan GT-R",
      type: "Sport",
      image: "/car (1).png",
      price: "$80.00",
      capacity: "",
    },
    {
      id: 3,
      name: "Rolls-Royce",
      type: "Sedan",
      image: "/Car (2).png",
      price: "$96.00",
      capacity: "",
    },
    {
      id: 4,
      name: "All New Rush",
      type: "SUV",
      image: "/Car (4).png",
      price: "$72.00",
      capacity: "",
    },
    {
      id: 5,
      name: "CR-V",
      type: "SUV",
      image: "/Car (5).png",
      price: "$80.00",
      capacity: "",
    },
    {
      id: 6,
      name: "All New Terios",
      type: "SUV",
      image: "/Car (6).png",
      price: "$74.00",
      capacity: "",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row p-6 bg-gray-50">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 p-4 bg-white border-r">
          <h2 className="text-lg font-bold mb-4">Type</h2>
          <div className="flex flex-col">
            {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
              (type, index) => (
                <label key={index} className="mb-2">
                  <input type="checkbox" className="mr-2" />
                  {type}
                </label>
              )
            )}
          </div>
          <h2 className="text-lg font-bold mt-6 mb-4">Capacity</h2>
          <div className="flex flex-col">
            {["2 Person", "4 Person", "6 Person", "8 or More"].map(
              (capacity, index) => (
                <label key={index} className="mb-2">
                  <input type="checkbox" className="mr-2" />
                  {capacity}
                </label>
              )
            )}
          </div>
          <h2 className="text-lg font-bold mt-6 mb-4">Price</h2>
          <input type="range" className="w-full" />
          <p className="text-sm mt-2">Max: $100.00</p>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-6">
          {/* Car Details */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Section */}
              <div>
                <div className="relative">
                  <img
                    src={carDetails.image}
                    alt={carDetails.name}
                    className="w-full h-64 object-contain rounded-lg"
                  />
                  <div className="absolute top-2 left-2 bg-blue-500 text-white text-sm px-3 py-1 rounded">
                    Sports car with the best design and acceleration
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Safety and comfort with futuristic and elegant sports car
                </p>
                <div className="flex mt-4 space-x-4">
                  {carDetails.thumbnails.map((thumb, index) => (
                    <img
                      key={index}
                      src={thumb}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                    />
                  ))}
                </div>
              </div>

              {/* Right Section */}
              <div>
                <h1 className="text-2xl font-bold">{carDetails.name}</h1>
                <p className="text-gray-600 mt-4">{carDetails.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="text-sm">
                    <span className="font-bold">Type Car: </span>
                    {carDetails.type}
                  </div>
                  <div className="text-sm">
                    <span className="font-bold">Capacity: </span>
                    {carDetails.capacity}
                  </div>
                  <div className="text-sm">
                    <span className="font-bold">Transmission: </span>
                    {carDetails.transmission}
                  </div>
                  <div className="text-sm">
                    <span className="font-bold">Fuel: </span>
                    {carDetails.fuel}
                  </div>
                  <div className="text-sm">
                    <span className="font-bold">Engine: </span>
                    {carDetails.engine}
                  </div>
                </div>
                <div className="mt-6">
                  <span className="text-lg font-bold text-blue-600">
                    {carDetails.price}{" "}
                    <span className="text-gray-400 line-through">
                      {carDetails.discountPrice}
                    </span>
                  </span>
                  <button onClick={handleRentNow} className="ml-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Reviews</h2>
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>

          {/* Recommended Cars Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Recommended Cars</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedCars.map((car) => (
                <CarCard key={car.id} {...car} />
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CarDetails;
