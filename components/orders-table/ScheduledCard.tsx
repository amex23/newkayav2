import { format as formatDate } from "date-fns";

type Props = {
  date: string;
};

const ScheduledCard = ({ date }: Props) => {
  return (
    <div className="w-full h-full bg-white rounded-[30px] p-7 py-4">
      <p>Project Delivery Date</p>

      <h1 className="text-[#005433] text-2xl font-semibold mt-2">
        {formatDate(new Date(date), "MMMM dd, yyyy")}
      </h1>
    </div>
  );
};

export default ScheduledCard;
