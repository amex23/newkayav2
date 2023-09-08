import Rating from "@/components/ui/Rating";

const mockData = {
  orderNumber: "76839",
  rating: 4.3,
};

const DeliveredCard = () => {
  const { orderNumber, rating } = mockData;
  return (
    <div className="w-full h-full bg-white rounded-[30px] p-7 py-4">
      <p className="text-[#005433] font-medium">
        Order #{orderNumber}
      </p>

      <h1 className="text-[#005433] text-2xl font-semibold mt-2">
        Delivered
      </h1>

      <h2 className="text-xl text-[#005433] font-semibold mt-2">Rating</h2>
      <Rating rating={rating} />
    </div>
  );
};

export default DeliveredCard;
