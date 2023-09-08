import OrderTableHeader from "@/components/orders-table/OrderTableHeader";
import { Table } from "@/components/ui/Table";
import { Calendar, Clock, Package, Truck } from "lucide-react";
import Image from "next/image";

const mockData = {
  headers: [
    { name: "Pending", icon: <Clock />, color: "bg-[#6FB0EB] text-[#6FB0EB]" },
    { name: "Ordered", icon: <Package />, color: "bg-[#FF914D] text-[#FF914D]" },
    { name: "Scheduled", icon: <Calendar />, color: "bg-[#FFCC00] text-[#FFCC00]" },
    { name: "Delivered", icon: <Truck />, color: "bg-[#005433] text-[#005433]" },
  ],
};

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-start p-12 px-16">
        <h1 className="scroll-m-20 text-4xl font-semibold lg:text-5xl">
          WelcomeHomes <br />Order Summary
        </h1>
        <Image
          src="/kaya.svg"
          width={125}
          height={80}
          alt="Kaya"
        />
      </div>

      <Table className="table-fixed border border-separate border-spacing-0 bg-[#F8F8F8] rounded-t-[60px]">
        <OrderTableHeader
          primaryColumn="Phases"
          subColumns={mockData.headers}
        />
      </Table>
    </div>
  );
}
