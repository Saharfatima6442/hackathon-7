import Image from "next/image";

const CarListing = () => {
    return (
      <section id="cars" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Car Fleet</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Repeat for each car */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <Image src="/assets/car1.jpg" alt="Car 1" className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-4">Car Name</h3>
              <p className="text-sm text-gray-500">Price per day: $100</p>
            </div>
            {/* Add more car cards here */}
          </div>
        </div>
      </section>
    );
  };
  
  export default CarListing;
  