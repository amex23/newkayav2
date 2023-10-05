"use client"

import DeliveredCard from "@/components/orders-table/DeliveredCard";
import OrderTableHeader from "@/components/orders-table/OrderTableHeader";
import OrderedCard from "@/components/orders-table/OrderedCard";
import PendingCard from "@/components/orders-table/PendingCard";
import PhaseCard from "@/components/orders-table/PhaseCard";
import ScheduledCard from "@/components/orders-table/ScheduledCard";
import ViewSelector from "@/components/orders-table/ViewSelector";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/Table";

import { Calendar, Clock, Package, Truck } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from 'react'
import { Project, ProjectGroup } from "./types";
import { Minus } from 'lucide-react';
const _ = require('lodash')

const mockData = {
  headers: [
    { name: "Pending", icon: <Clock />, color: "bg-[#6FB0EB] text-[#6FB0EB]" },
    {
      name: "Ordered",
      icon: <Package />,
      color: "bg-[#FF914D] text-[#FF914D]",
    },
    {
      name: "Scheduled",
      icon: <Calendar />,
      color: "bg-[#FFCC00] text-[#FFCC00]",
    },
    {
      name: "Delivered",
      icon: <Truck />,
      color: "bg-[#005433] text-[#005433]",
    },
  ],


};


const Project = [
  {
    phase: "",
    percentage: 0,
    number: "",
    model: "",
    orders: [{
      status: "",
      _id: "",
      title: "",
      img: "",
      price: 0
    }]

  }
]


export default function Home() {

  const [selectedView, setSelectedView] = useState("Phase")
  let data = [
    {
      phase: "abc",
      img: "https://s3-alpha-sig.figma.com/img/39d7/96e2/d445db85e1b10a6b436a37085c25ab94?Expires=1694995200&Signature=h8vwnBd8gMPKmJ87e6RUqy0rTvoIEqoyVvbqp26LjU5FekT~uiHRVGxiFjcI5JvJ0FHqu7yBF3rXwaY5RirMZTIb~S0TvsP8bJg1Kq9qSsysvSaWiqut-PSDqgycOMPhyBlCKd4DaQY-~1qhPC5gy1fagCixVpccgLItGi3IQbA3kZipADWhFrnq97Y3kDOHBnKMxnf4yOqdmDvL9WhVNrkAtYwTIu1DntQPDUoOC6on3wW1ty4gSk0~gMLQ882DyAW6uNd121yI8dTT499n-JSfUYPZtASh6Bl8aqUU7D0xPPi-ETBiYwqg~4eJE-MFc4dJU-2r90CcIma8GneSMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "dasdsa",
      percentage: 70,
      number: "2332",
      model: "abc",
      orders: [{
        status: "pending",
        orderNumber: "312321",
        title: "adsad",
        img: "",
        price: 21312321232
      },
      {
        status: "pending",
        orderNumber: "31232dads1",
        title: "bfbfgf",
        img: "",
        price: 21312321

      },
      {
        status: "ordered",
        orderNumber: "31232dads1",
        title: "khkhjh",
        img: "",
        price: 21312321
      }]

    }
    // {
    //   phase: "abc",
    //   img: "https://s3-alpha-sig.figma.com/img/39d7/96e2/d445db85e1b10a6b436a37085c25ab94?Expires=1694995200&Signature=h8vwnBd8gMPKmJ87e6RUqy0rTvoIEqoyVvbqp26LjU5FekT~uiHRVGxiFjcI5JvJ0FHqu7yBF3rXwaY5RirMZTIb~S0TvsP8bJg1Kq9qSsysvSaWiqut-PSDqgycOMPhyBlCKd4DaQY-~1qhPC5gy1fagCixVpccgLItGi3IQbA3kZipADWhFrnq97Y3kDOHBnKMxnf4yOqdmDvL9WhVNrkAtYwTIu1DntQPDUoOC6on3wW1ty4gSk0~gMLQ882DyAW6uNd121yI8dTT499n-JSfUYPZtASh6Bl8aqUU7D0xPPi-ETBiYwqg~4eJE-MFc4dJU-2r90CcIma8GneSMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    //   name: "dasdsas",
    //   percentage: 0,
    //   number: "",
    //   model: "u55u5",
    //   orders: [{
    //     status: "ordered",
    //     orderNumber: "312321",
    //     title: "haha",
    //     img: "",
    //     price: 21312321232
    //   },
    //   {
    //     status: "ordered",
    //     orderNumber: "31232dads1",
    //     title: "haha1",
    //     img: "",
    //     price: 21312321
    //   }]

    // }
    // {
    //   phase: "bcd",
    //   name: "",

    //   img: "https://s3-alpha-sig.figma.com/img/39d7/96e2/d445db85e1b10a6b436a37085c25ab94?Expires=1694995200&Signature=h8vwnBd8gMPKmJ87e6RUqy0rTvoIEqoyVvbqp26LjU5FekT~uiHRVGxiFjcI5JvJ0FHqu7yBF3rXwaY5RirMZTIb~S0TvsP8bJg1Kq9qSsysvSaWiqut-PSDqgycOMPhyBlCKd4DaQY-~1qhPC5gy1fagCixVpccgLItGi3IQbA3kZipADWhFrnq97Y3kDOHBnKMxnf4yOqdmDvL9WhVNrkAtYwTIu1DntQPDUoOC6on3wW1ty4gSk0~gMLQ882DyAW6uNd121yI8dTT499n-JSfUYPZtASh6Bl8aqUU7D0xPPi-ETBiYwqg~4eJE-MFc4dJU-2r90CcIma8GneSMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    //   percentage: 0,
    //   number: "",
    //   model: "dads",
    //   orders: [{
    //     status: "",
    //     _id: "",
    //     title: "",
    //     img: "",
    //     price: 0
    //   }]

    // }
  ];
	const [groupByFilter, setGroupByFilter] = useState<ProjectGroup>(_.groupBy(data, 'model'));
	// const groupByFilter = _.groupBy(data, 'phase')

	const fetchData = () => {

	}
	const filter = (value : string) => {
	setGroupByFilter(_.groupBy(data, value))

	setSelectedView(value[0].toUpperCase() + value.slice(1))
	}
	

	const { Client } = require('@notionhq/client');

	const notion = new Client({ auth: process.env.NOTION_API_KEY });

	(async () => {
	  const pageId = 'fe3ee4c49a3e47869d489a3450077fd7';
	  const response = await notion.pages.retrieve({ page_id: pageId });
	  console.log(response);
	})();



  return (
    <div className="w-full">
      <div className="flex justify-between items-start p-6 px-16 bg-red-400" >
        <h1 className="scroll-m-20 text-4xl font-semibold lg:text-5xl">
          WelcomeHomes <br />Order Summary
        </h1>
		<a href="/test">User</a>
        <Image
          src="/kaya.svg"
          width={125}
          height={80}
          alt="Kaya"
        />
      </div>
      <ViewSelector filter = {filter} />
      <Table className="table-fixed border border-separate border-spacing-0 bg-[#F8F8F8] rounded-t-[60px]">
        <OrderTableHeader
          primaryColumn= {selectedView}
          subColumns={mockData.headers}
        />

        <TableBody className="ml-15">

          {Object.keys(groupByFilter).map((key, i) => {
            const numberOfProjects = groupByFilter[key].length;

            return (
              <>
                <div className="flex flex-row gap-5 items-center pl-7">
                  <Minus className="scroll-m-20 text-4xl font-bold lg:text-3xl ml-15 text-[#207a1b]"/>
                  <h2 className="scroll-m-20 text-4xl font-semibold lg:text-3xl ml-15 text-[#207a1b]">{key} </h2>
                  <span className="px-3 pt-1 pb-1 bg-[#c8c9c7] text-[#5e5e5e] font-semibold rounded-md text-xl">{numberOfProjects}</span>
                </div>
                {groupByFilter[key].map((child: Project,i:number) => {
                  return (

                    <TableRow key={i}>
                      <TableCell className="border-x p-6 align-top">

                        <PhaseCard child={child} />
                      </TableCell>



                      <TableCell className="border-x p-6 align-top">

                        {child.orders.filter((order) => {
                          return order.status == "pending"
                        }).map((filteredOrder) => (<>
                          <PendingCard order={filteredOrder} />
                        </>))}


                      </TableCell>
                      <TableCell className="border-x p-6 align-top">
                        {child.orders.filter((order) => {
                          return order.status == "ordered"
                        }).map((filteredOrder) => (<>
                          <OrderedCard order={filteredOrder} />
                        </>))}

                      </TableCell>
                      <TableCell className="border-x p-6 align-top">

                        <ScheduledCard date={child.deliveryDate || "3333-3-3"} />


                      </TableCell>
                      <TableCell className="border-x p-6 align-top">


                        {child.orders.filter((order) => {
                          return order.status == "delivered"
                        }).map((filteredOrder) => (<>
                          <DeliveredCard order={filteredOrder} />
                        </>))}


                      </TableCell>


                    </TableRow>

                  )
                })}
              </>
            )
          })}



        </TableBody>
      </Table>
    </div>
  );
}
