import { useRouter } from "next/router";
import Image from "next/image";
import { ImagesStock } from "../components/ImagesStock";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Countdown from "../components/Countdown";
import { useEffect, useState } from "react";

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
        <h3 className="font-baskerville text-xs xxs:text-lg tracking-[0.5em]">
          THE WEDDING OF
        </h3>
        <h1 className="font-vibes text-3xl xxs:text-5xl md:text-7xl font-semibold py-6 text-secondary">
          Welsen & Elene
        </h1>
        <h3 className="font-baskerville text-xs xxs:text-lg tracking-[0.1em]">
          SATURDAY, SEPTEMBER 24TH, 2022
        </h3>
        <Countdown />
        <h3 className="py-4 bg-primary  border-y-2 border-black my-12 w-full text-base xxs:text-xl font-baskerville">
          Dear, <br /> <p className="font-bold"> {query.to} </p>
        </h3>
        <p
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
        </p>
      </div>
    </motion.div>
  );
}

export default HeroHome;
