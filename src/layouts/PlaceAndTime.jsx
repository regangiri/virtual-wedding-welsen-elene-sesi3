import React, { useState } from "react";
import Accordion from "../components/Accordion";
import groomBrideImage from "../../public/assets/images/groombridedummy.jpeg";
import Image from "next/image";
import { ImagesStock } from "../components/ImagesStock";

import { IoMapOutline as MapIcon } from "react-icons/io5";
import Link from "next/link";

function PlaceAndTime() {
  return (
    <div className="w-full max-w-xl bg-palewhite py-8 text-md text-center flex items-center justify-center flex-col">
      <h1 className="text-xl xxs:text-3xl sm:text-5xl mx-0 xxs:mx-12 font-baskerville py-3 text-secondary border-b-2 border-secondary mb-12">
        Pemberkatan Pernikahan
      </h1>

      <div className="time-and-date-description flex flex-col items-center justify-center text-sm font-semibold font-baskerville">
        <p className="py-1 text-xl px-3">
          Sabtu, 24 September 2022 <br /> 11.00 WIB{" "}
        </p>
        <p className="pt-2 text-xl">Gereja St. Theresia </p>
        <p className="py-1 text-xs xxs:text-sm px-3">
          Jl. Gereja Theresia No.2, Menteng, Jakarta Pusat
        </p>
        {/* <p className="text-xs xxs:text-sm sm:text-base px-2">
          Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350
        </p> */}
        <Link href={`https://goo.gl/maps/TtSvUxZHoekj5hGs6`}>
          <a
            target="_blank"
            className="md:w-full lg:w-full text-center w-64 flex items-center space-x-2 justify-center px-8 py-3  border border-secondary bg-secondary text-white text-base font-medium rounded-3xl text-button  hover:backdrop-blur-xl hover:bg-transparent hover:text-secondary md:py-2 md:text-lg md:px-10 my-6"
          >
            <MapIcon className="h-6 w-6" aria-hidden="true" />
            <span className="hover:cursor-pointer">Lihat Peta</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default PlaceAndTime;
