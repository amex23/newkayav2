import { formatMoney } from "@/lib/utils";
import Image from "next/image";
import { Order } from "@/app/types";
const mockData = {
  name: "Oasis 3 Flex Residence - PacClad - White Paint",
  orderNumber: "76836",
  image:
    "https://s3-alpha-sig.figma.com/img/a3b6/9634/4cc883f9615d0f9012b19f08c6509bf5?Expires=1694995200&Signature=XGVRxF21HF4etrPpDdB1pseNpgzfqyChOHINJq5U-TByqw8uUCCMde6T9CbedX~vQLn5POYSHmfNRB6Ys7wNz9RwAFTnvrb5u1eJrARGYYvLTc4s4u52WO2pRNG-sBnkcA3Mx9bylTT4qDTX~0ltaiA2-xOZoIe6adZyWEkNf-XIeMZMolaj1XIDM3FjSBWiBZeRVT4QqEhb64xTdTuLdDJTbze7XgoWTvyAXSEFoXqCA4vA0gi3gzQDy~oSgF-738U6l-e7mr9XRlsI0WcsPWCeh6HYOQY~h01ciSPVwVOFiSWhxfFWqzjOB7XjeqgcLXdJS3bllMFIStwXKma2HQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  total: 8058.58,
};

const OrderedCard = (props:{order:Order}) => {
  const { orderNumber, title, img, price } = props.order;
  return (
    <div className="bg-white p-7 py-4 w-full h-full rounded-[10%] mt-5">
      <p className="text-[#005433] font-medium">
        Order #{orderNumber}
      </p>

      <h1 className="text-[#005433] text-2xl font-semibold mt-2">
        {title}
      </h1>

      <Image
        src={img}
        alt={orderNumber}
        width={100}
        height={100}
        className="w-full rounded-lg my-4"
      />

      <h2 className="text-xl font-bold">
        {formatMoney(price)}
      </h2>
    </div>
  );
};

export default OrderedCard;
