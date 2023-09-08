import Image from "next/image";
import { Progress } from "../ui/Progress";
import { Home } from "lucide-react";

const mockData = {
  name: "0 Dann Farm - Horn",
  percentage: 73,
  number: "A22007",
  model: "Oasis 3 Flex",
  image:
    "https://s3-alpha-sig.figma.com/img/39d7/96e2/d445db85e1b10a6b436a37085c25ab94?Expires=1694995200&Signature=h8vwnBd8gMPKmJ87e6RUqy0rTvoIEqoyVvbqp26LjU5FekT~uiHRVGxiFjcI5JvJ0FHqu7yBF3rXwaY5RirMZTIb~S0TvsP8bJg1Kq9qSsysvSaWiqut-PSDqgycOMPhyBlCKd4DaQY-~1qhPC5gy1fagCixVpccgLItGi3IQbA3kZipADWhFrnq97Y3kDOHBnKMxnf4yOqdmDvL9WhVNrkAtYwTIu1DntQPDUoOC6on3wW1ty4gSk0~gMLQ882DyAW6uNd121yI8dTT499n-JSfUYPZtASh6Bl8aqUU7D0xPPi-ETBiYwqg~4eJE-MFc4dJU-2r90CcIma8GneSMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
};

const PhaseCard = () => {
  const { image, number, name, percentage, model } = mockData; // TODO: Turn this into props
  return (
    <div className="w-full h-full bg-white rounded-[10%]">
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="w-full h-full rounded-t-[10%]"
        />
        <p className="text-white text-sm font-semibold absolute top-4 right-2">{model}</p>
        <p className="text-white text-lg font-semibold absolute bottom-4 left-2">{number}</p>
        <Home className="absolute top-4 left-4 text-white" />
      </div>
      <div className="p-2 px-4">
        <p className="text-[#474747] text-md font-semibold">{name}</p>

        <Progress value={percentage} className="h-3 my-2" />
      </div>
    </div>
  );
};

export default PhaseCard;
