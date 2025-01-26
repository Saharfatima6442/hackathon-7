'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewCard from '@/components/ReviewCard';
import CarCard from '@/components/CarCard';
import Link from 'next/link';
import Image from 'next/image';

const CarDetails: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Retrieve the 'billing' query parameter
  const billing = searchParams?.get('billing') || 'default-billing';

  // Sidebar states
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedCapacity, setSelectedCapacity] = useState<string[]>([]);

  // Handlers for sidebar filters
  const handleTypeChange = (type: string) => {
    setSelectedType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleCapacityChange = (capacity: string) => {
    setSelectedCapacity((prev) =>
      prev.includes(capacity) ? prev.filter((c) => c !== capacity) : [...prev, capacity]
    );
  };

  // "Rent Now" button handler
  const handleRentNow = () => {
    // const billingId = billing || 'default-id';
    router.push(`/rent/${billing}`);
  };
  const carDetails = {
    billing,
    name: 'Nissan GT-R',
    type: 'Sport',
    image: '/image 8.png',
    price: '$80.00',
    capacity: '2 Person',
    transmission: 'Manual',
    fuel: 'Gasoline',
    engine: '70L',
    description:
      "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the 'race track'.",
    discountPrice: '$100.00',
    thumbnails: ['/View 1.png', '/View 2.png', '/View 3.png'],
  };

  const reviews = [
    {
      name: 'Alex Stanton',
      date: '21 July 2023',
      review:
        'Safety and comfort were excellent in this Nissan GT-R. Perfect hire car for a sporty ride. I loved it!',
      rating: 5,
    },
    {
      name: 'Skylar Dias',
      date: '20 July 2023',
      review:
        'The driving experience of this car was remarkable. Highly recommend for anyone seeking thrill and speed.',
      rating: 4,
    },
  ];

  const recommendedCars = [
    { id: 1, name: 'Koenigsegg', type: 'Sport', image: '/car.png', price: '$99.00' },
    { id: 2, name: 'Nissan GT-R', type: 'Sport', image: '/car (1).png', price: '$80.00' },
    { id: 3, name: 'Rolls-Royce', type: 'Sedan', image: '/Car (2).png', price: '$96.00' },
    { id: 4, name: 'All New Rush', type: 'SUV', image: '/Car (4).png', price: '$72.00' },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row p-6 bg-gray-50">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 p-4 bg-white border-r">
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Type</h2>
            {['Sport', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback'].map((type) => (
              <div key={type} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={selectedType.includes(type)}
                  onChange={() => handleTypeChange(type)}
                  className="mr-2"
                />
                <label>{type}</label>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Capacity</h2>
            {['2 People', '4 People', '6 People', '8 or More'].map((capacity) => (
              <div key={capacity} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={selectedCapacity.includes(capacity)}
                  onChange={() => handleCapacityChange(capacity)}
                  className="mr-2"
                />
                <label>{capacity}</label>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-6">
          {/* Car Details */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <Image
                  src={carDetails.image}
                  alt={carDetails.name}
                  className="w-full h-64 object-contain rounded-lg"
                />
                <div className="flex mt-4 space-x-4">
                  {carDetails.thumbnails?.length > 0 ? (
                    carDetails.thumbnails.map((thumb, index) => (
                      <Image
                        key={index}
                        src={thumb}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-20 h-20 object-cover rounded-lg bg-blue-500"
                      />
                    ))
                  ) : (
                    <p>No thumbnails available</p>
                  )}
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{carDetails.name}</h1>
                <p className="text-gray-600 mt-4">{carDetails.description}</p>
                <div className="mt-6 space-y-4">
                  {/* Attributes Section */}
                  <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>Type Car</span>
                      <span className="font-semibold text-gray-700">{carDetails.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Capacity</span>
                      <span className="font-semibold text-gray-700">{carDetails.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Steering</span>
                      <span className="font-semibold text-gray-700">{carDetails.transmission}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fuel</span>
                      <span className="font-semibold text-gray-700">{carDetails.fuel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Engine</span>
                      <span className="font-semibold text-gray-700">{carDetails.engine}</span>
                    </div>
                  </div>

                  {/* Price Section */}
                  <p>
                    <span className="text-lg font-bold text-blue-600">
                      {carDetails.price}{' '}
                      <span className="text-gray-400 line-through">{carDetails.discountPrice}</span>
                    </span>
                  </p>

                  {/* Rent Now Button */}
                  <Link href={"/billings"}>
                  <button
                    onClick={handleRentNow}
                    className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Rent Now
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Reviews</h2>
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>

          {/* Recommended Cars */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Recommended Cars</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedCars.map((car) => (
                <CarCard capacity={2-4} key={car.id} {...car} />
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
