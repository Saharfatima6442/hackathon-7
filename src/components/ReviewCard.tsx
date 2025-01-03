const ReviewCard = ({ name, date, review, rating }: any) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="font-bold">{name}</h3>
        <span className="text-sm text-gray-400">{date}</span>
        <p className="mt-2">{review}</p>
        <span className="text-yellow-500">{"★".repeat(rating)}</span>
      </div>
    );
  };
  
  export default ReviewCard;
  