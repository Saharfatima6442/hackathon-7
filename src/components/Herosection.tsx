import Image from "next/image";

const HeroSection: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: "The Best Platform for Car Rental",
      description:
        "Ease of doing a car rental safely and reliably. Of course at low price.",
      buttonText: "Rental Car",
      image: "/image 7.png",
      bgGradient: "bg-gradient-to-r from-[#3563E9] to-[#3563E9]",
    },
    {
      id: 2,
      title: "Easy way to rent a car at a low price",
      description:
        "Providing cheap car rental services and safe and comfortable facilities.",
      buttonText: "Rental Car",
      image: "/image 8.png",
      bgGradient: "bg-gradient-to-r from-[#54A6FF] to-[#54A6FF]",
    },
  ];

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`rounded-lg ${card.bgGradient} p-6 flex flex-col lg:flex-row items-center`}
          >
            <div className="text-left flex-1">
              <h2 className="text-white text-2xl font-bold font-[Plus-Jakarta-Sans] mb-4">
                {card.title}
              </h2>
              <p className="text-white text-sm mb-6 font-[Plus-Jakarta-Sans]">
                {card.description}
              </p>
              <button className="bg-white text-[#3563E9] px-6 py-2 rounded-md shadow-md hover:bg-gray-200 transition">
                {card.buttonText}
              </button>
            </div>
            <div className="flex-1 mt-6 lg:mt-0 flex justify-center">
              <Image
                src={card.image}
                alt={card.title}
                width={406}
                height={380}
                className="object-contain"
                layout="intrinsic"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
