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
              className={`rounded-lg ${card.bgGradient} p-6 flex items-center`}
            >
              <div className="w-[640px] h-[380px]">
                <h2 className="text-white text-2xl w-[272px] h-[96px] font-[Plus-Jakarta-Sans] font-bold text-[32px] text-justify">{card.title}</h2>
                <p className="text-white text-sm mt-4 w-[284px] h-[48px] font-[Plus-Jakarta-Sans] text-[16px] text-justify">{card.description}</p>
                <button className="mt-6 bg-[#54A6FF] text-white w-[120px] h-[44px] p-20 px-0 py-2 mr-10 rounded-md hover:bg-[#54A6FF]">
                  {card.buttonText}
                </button>
              </div>
              <div className="w-[406px] h-[116x] flex justify-items-end align-bottom">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[406px] h-[116px] object-contain flex justify-end align-bottom"
                />
              </div>
            </div>
          ))};
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  