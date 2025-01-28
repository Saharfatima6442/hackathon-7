import Image from "next/image";

interface CarCardProps {
  id: number;
  name: string;
  type: string;
  image: string;
  price: string;
  capacity: number; // Number of people capacity
}

const CarCard: React.FC<CarCardProps> = ({ name, type, image, price, capacity }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {/* Car Image */}
      <Image
        src={image}
        alt={name}
        width={300} // Set image width
        height={200} // Set image height
        className="rounded-md object-contain mb-4"
      />

      {/* Car Name and Type */}
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-500">{type}</p>

      {/* Capacity */}
      <p className="text-sm text-gray-500">{capacity} People</p>

      {/* Price and Rent Now Button */}
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-bold text-blue-600">{price}</span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          aria-label={`Rent ${name}`}
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
