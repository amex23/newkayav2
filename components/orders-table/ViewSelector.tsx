"use client";
import React, { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Layers } from 'lucide-react';
type Props = {
  filter: (value:string) => void;
};
function ViewSelector({ filter }: Props) {
  const views = [
    {
      name: "phase",
      text: "Order By Phase And Project",

      value: "phase",
    },
    {
      name: "model",
      text: "Order By Model And Project",

      value: "model",
    },
    {
      name: "issues",
      text: "Order Issues",

      value: "system",
    },
  ];
  return (
    <Select onValueChange={(v) => filter(v)}>
      <SelectTrigger className="w-[auto] border-0 font-bold text-2xl text-[#207a1b] ml-16 pb-10  ">
        <Layers className="mr-2"/>
        <SelectValue placeholder="Order By Phase And Project" />
      </SelectTrigger>
      <SelectContent>
        {views.map((view, i) => {
          return (
            <SelectItem key={i} value={view.value}>
              <span>{view.text}</span>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}

export default ViewSelector;
