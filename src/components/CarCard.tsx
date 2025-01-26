import Image from "next/image";

interface CarCardProps {
    id: number;
    name: string;
    type: string;
    image: string;
    price: string;
    capacity: number;
  }
  
  const CarCard: React.FC<CarCardProps> = ({ id, name, type, image, price, capacity }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <Image
          src={image}
          alt={name}
          className="w-full h-40 object-contain rounded-md mb-4"
        />
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-500">{type}</p>
        <p className="text-sm text-gray-500">{capacity}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">{price}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Rent Now
          </button>
        </div>
      </div>
    );
  };
  
  export default CarCard;
  