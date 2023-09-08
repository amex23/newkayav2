import { TableHead, TableHeader, TableRow } from "@/components/ui/Table";
import { ReactNode } from "react";

type Props = {
  primaryColumn: string;
  subColumns: Array<{ name: string; icon: ReactNode; color: string }>;
};

const OrderTableHeader = ({ primaryColumn, subColumns }: Props) => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="border-r w-1/5 p-8">
          <div className="text-center bg-[#D6D6D6] text-black bg-opacity-30 w-full py-2 px-6 rounded-full font-semibold text-3xl">
            {primaryColumn}
          </div>
        </TableHead>
        {subColumns.map((column, index) => (
          <TableHead
            key={`orders-header-${index}`}
            className="border-r w-1/5 p-8"
          >
            <div
              className={`${column.color} bg-opacity-30 w-full py-2 px-6 rounded-full`}
            >
              <div className="flex items-center justify-center gap-2 text-center font-semibold text-xl">
                <div>{column.icon}</div>
                <div>{column.name}</div>
              </div>
            </div>
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default OrderTableHeader;
