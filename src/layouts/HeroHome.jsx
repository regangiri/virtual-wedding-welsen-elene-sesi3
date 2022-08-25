import { useRouter } from "next/router";
import Image from "next/image";
import { ImagesStock } from "../components/ImagesStock";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Countdown from "../components/Countdown";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoTimeOutline } from "react-icons/io5";

function HeroHome() {
  const { query } = useRouter();
  const { ref, inView } = useInView();
  const titleAnimation = useAnimation();
  const guestbookAnimation = useAnimation();
  const messageAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      titleAnimation.start({
        opacity: 1,
      });
    }
    if (!inView) {
      titleAnimation.start({
        opacity: 1,
      });
    }
  }, [inView]);

  return (
    <motion.div
      animate={titleAnimation}
      className="w-full max-w-xl bg-palewhite py-12  text-md text-center flex items-center justify-center flex-col"
    >
      <div className="header">
        <h3 className="font-baskerville text-xs xxs:text-base tracking-wide ">
          THE WEDDING OF
        </h3>
        <h1 className="font-serif text-3xl xxs:text-4xl  font-semibold py-1 text-secondary">
          Welsen & Elene
        </h1>
        <h3 className="font-baskerville text-xs xxs:text-base tracking-wider">
          Sabtu, 24 September 2022
        </h3>
        <div className="mt-5  max-w-md mx-auto sm:flex sm:justify-center justify-center md:mt-8 hover:cursor-pointer">
          <div className="rounded-md  flex justify-center">
            <Link
              href={`https://calendar.google.com/event?action=TEMPLATE&tmeid=MmU0YW1iYmxjYXAzOXRmbTZmdXBhY3Z1cTQgOHByZzZydmltcGU0Yzk0cDUxNzZxa3JsbXNAZw&tmsrc=8prg6rvimpe4c94p5176qkrlms%40group.calendar.google.com`}
            >
              <a
                target="_blank"
                className="md:w-full lg:w-full text-center w-64 flex items-center space-x-2 justify-center px-8 py-3  border border-secondary bg-secondary text-white text-base font-medium rounded-md text-button  hover:backdrop-blur-xl hover:bg-transparent hover:text-secondary md:py-2 md:text-lg md:px-10 font-baskerville"
              >
                <IoTimeOutline className="h-6 w-6" aria-hidden="true" />{" "}
                <span className="hover:cursor-pointer">Remind me</span>
              </a>
            </Link>
          </div>
        </div>
        {/* <p
          ref={ref}
          className="my-4 px-6 text-sm xxs:text-lg sm:text-xl font-baskerville font-medium"
        >
          Due to the pandemic, we have made the difficult decision to scale down
          our guest list. Please accept our deepest apologies for not being able
          to host you on our special day. We will miss your presence and thank
          you for your love and understanding.
        </p>
        <p className="my-4 px-6 text-sm xxs:text-lg sm:text-xl font-baskerville font-medium">
          Join us virtually as we exchange our vows through Youtube live
          streaming.
        </p> */}
      </div>
    </motion.div>
  );
}

export default HeroHome;
