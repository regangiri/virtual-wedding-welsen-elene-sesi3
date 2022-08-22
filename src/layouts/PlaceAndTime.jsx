import React, { useState } from "react";
import Accordion from "../components/Accordion";
import groomBrideImage from "../../public/assets/images/groombridedummy.jpeg";
import Image from "next/image";
import { ImagesStock } from "../components/ImagesStock";

function PlaceAndTime() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full max-w-xl bg-palewhite py-24  text-md text-center">
      <div className="w-1/2 flex border-t-2 border-black py-6" />
      <h1 className="text-5xl sm:text-7xl font-vibes py-3">Place & Time</h1>
      <Accordion accordionTitle="Holy Matrimony" open={isOpen}>
        {/* <div className="time-and-date-image-container mb-4  h-72 w-96    relative">
          <Image
            src={ImagesStock.ourmoment2}
            layout="fill"
            alt="placeandtime"
          />
        </div> */}
        <div className="relative p-auto">
          <iframe
            className="relative m-auto w-full rounded-md shadow-lg my-6"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5649914549663!2d106.82326601473927!3d-6.188918895519539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f424531710d9%3A0xfba169927fc5fd21!2sSaint%20Theresia%20Catholic%20Church!5e0!3m2!1sen!2sid!4v1661178311271!5m2!1sen!2sid"
            height="250"
            style={{ border: 0 }}
            loading="eager"
          ></iframe>
        </div>
        <div className="time-and-date-description flex flex-col text-base text-left font-baskerville text-secondary">
          <p>Time: Saturday, June 18th, 2022 | 10.00 WITA </p>
          <p>Place: St. Silvester Church, Pecatu</p>
          <p>Ungasan, Kec. Kuta Sel., Kabupaten Badung, Bali</p>
        </div>
      </Accordion>
    </div>
  );
}

export default PlaceAndTime;
