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
          Welsen &#38; Elene
        </h1>
        <h3 className="font-baskerville text-xs xxs:text-base tracking-wider">
          Saturday, 24<sup>th</sup> September 2022
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
        <div className="hero-text font-baskerville text-base text-left pt-16">
          <p className="my-4 px-6">Dear {query.to},</p>
          <p className="my-4 px-6">
            We made the difficult decision to keep our wedding intimate, and
            unfortunately that means there are a lot of friends and family who
            won&apos;t be there on our wedding day.
            <p className="my-4 ">
              We hope you can understand that it&apos;s nothing personal.
            </p>
            <p className="my-4">
              Please accept our sincerest apologies for not being able to invite
              you to our wedding day.
            </p>
          </p>
          <p className="my-4 px-6">
            Regards, <br /> Welsen &#38; Elene
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default HeroHome;
