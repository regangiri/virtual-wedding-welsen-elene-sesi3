import React, { useState } from "react";
import Accordion from "../components/Accordion";
import groomBrideImage from "../../public/assets/images/groombridedummy.jpeg";
import Image from "next/image";
import { ImagesStock } from "../components/ImagesStock";
import { Link } from "react-scroll";
import { IoMapOutline as MapIcon } from "react-icons/io5";

function PlaceAndTime() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full max-w-xl bg-palewhite py-8  text-md text-center">
      <h1 className="text-4xl sm:text-5xl px-3 font-baskerville py-6 text-secondary">
        Pemberkatan Pernikahan
      </h1>

      <div className="time-and-date-description flex flex-col items-center justify-center text-sm font-semibold font-baskerville text-">
        <p className="py-1 text-lg">Sabtu, 24 September 2022 | 11.00 WIB </p>
        <p className="py-2 text-lg">Gereja Santa Theresia Jakarta</p>
        <p className="text-xs xxs:text-sm sm:text-base px-2">
          Jl. Gereja Theresia No.2, RT.8/RW.4, Gondangdia,
        </p>
        <p className="text-xs xxs:text-sm sm:text-base px-2">
          Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350
        </p>
        <Link
          href={`https://calendar.google.com/event?action=TEMPLATE&tmeid=MnRpYzVmcTdpZmVlcmE4YWE0NWI0dGxxOWUgOHByZzZydmltcGU0Yzk0cDUxNzZxa3JsbXNAZw&tmsrc=8prg6rvimpe4c94p5176qkrlms%40group.calendar.google.com`}
        >
          <a
            target="_blank"
            className="md:w-full lg:w-full text-center w-64 flex items-center space-x-2 justify-center px-8 py-3  border border-secondary bg-secondary text-white text-base font-medium rounded-3xl text-button  hover:backdrop-blur-xl hover:bg-transparent hover:text-secondary md:py-2 md:text-lg md:px-10 my-6"
          >
            <MapIcon className="h-6 w-6" aria-hidden="true" />{" "}
            <span className="hover:cursor-pointer">Lihat Peta</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default PlaceAndTime;
