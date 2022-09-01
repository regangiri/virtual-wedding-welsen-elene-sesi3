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
      <h1 className="text-xl xxs:text-3xl sm:text-5xl mx-0 xxs:mx-12 font-baskerville pt-3 text-secondary mb-6">
        Wedding Details
      </h1>

      <div className="time-and-date-description flex flex-col items-center justify-center text-sm font-semibold font-baskerville">
        <h3 className="px-3 text-lg py-6">
          We request the honour of your presence on our wedding day that will be
          held on:
        </h3>
        <h3 className="px-3 text-xl ">Holy Matrimony</h3>
        <p className="py-1 text-xs xxs:text-sm px-3">
          Saturday, 24<sup>th</sup> September 2022 | 11.00 WIB{" "}
        </p>
        <p className="pt-2 text-xl">St. Theresia Church </p>
        <p className="py-1 text-xs text-center sm:text-base px-3">
          Jl. Gereja Theresia No.2, Menteng, Jakarta Pusat
        </p>
        {/* <p className="text-xs xxs:text-sm sm:text-base px-2">
          Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350
        </p> */}
        <Link href={`https://goo.gl/maps/TtSvUxZHoekj5hGs6`}>
          <a
            target="_blank"
            className="md:w-full lg:w-full text-center w-64 flex items-center space-x-2 justify-center px-8 py-3  border border-secondary bg-secondary text-white text-base font-medium rounded-3xl text-button  hover:backdrop-blur-xl hover:bg-transparent hover:text-secondary md:py-2 md:text-lg md:px-10 my-6 max-w-sm"
          >
            <MapIcon className="h-6 w-6" aria-hidden="true" />
            <span className="hover:cursor-pointer">See Location</span>
          </a>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center text-sm font-semibold font-baskerville ">
        {/* <h1 className="text-xl text-secondary xxs:text-3xl sm:text-5xl font-baskerville mb-10 font-medium border-b-2 border-secondary pb-3">
          Intimate Reception
        </h1> */}
        <h3 className="px-3 text-xl pt-6">Intimate Reception</h3>
        <p className="py-1 text-xs xxs:text-sm px-3">
          Saturday, 24<sup>th</sup> September 2022 | 18.30 WIB{" "}
        </p>

        <div className="address-box flex flex-col items-center justify-center text-sm font-semibold font-baskerville py-3">
          <p className="pt-2 text-[22px] py-2">
            Morrissey Hotel, 6<sup>th</sup> Floor{" "}
          </p>
          <p className="text-xs text-center sm:text-base px-2 pb-6">
            Jl. KH Wahid Hasyim No.70, Menteng, Jakarta Pusat
          </p>
          <Link href={`https://goo.gl/maps/MYM5sQHHyDWeBPTn9`}>
            <a
              target="_blank"
              className="md:w-full lg:w-full text-center w-64 flex items-center space-x-2 justify-center px-8 py-3  border border-secondary bg-secondary text-white text-base font-medium rounded-3xl text-button  hover:backdrop-blur-xl hover:bg-transparent hover:text-secondary md:py-2 md:text-lg md:px-10 max-w-sm font-baskerville"
            >
              <MapIcon className="h-6 w-6" aria-hidden="true" />{" "}
              <span className="hover:cursor-pointer">See Location</span>
            </a>
          </Link>
        </div>
      </div>
      <div className="nb ml-2 px-4 text-left text-sm font-bold font-baskerville">
        *) Intimate reception will be held on outdoor area
      </div>
    </div>
  );
}

export default PlaceAndTime;
