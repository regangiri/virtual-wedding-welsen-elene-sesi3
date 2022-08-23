import groomBrideImage from "../../public/assets/images/groombridedummy.jpeg";
import Image from "next/image";
import { ImagesStock } from "../components/ImagesStock";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

function Livestream() {
  const { ref, inView } = useInView();
  const titleAnimation = useAnimation();
  const videoAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      titleAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          delay: 0.3,
          bounce: 0.5,
        },
      });
      videoAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      titleAnimation.start({
        y: 0,
        opacity: 0,
      });
      videoAnimation.start({
        opacity: 0,
      });
    }
  }, [inView]);
  return (
    <div className="w-full max-w-xl bg-primary py-12 text-md text-center">
      <motion.h1
        animate={titleAnimation}
        className="text-6xl font-bold font-vibes tracking-widest py-6"
      >
        Livestream
      </motion.h1>

      <motion.div
        animate={videoAnimation}
        ref={ref}
        className="flex flex-col items-center pb-12 lg:pb-0 w-full video-container mb-5"
      >
        <iframe
          className="relative m-auto w-full my-10 rounded-md shadow-lg"
          src="https://www.youtube.com/embed/ENrlvremOLA"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <p>LIVE ON Saturday, September 24th, 2022 | 11.00 WIB</p>
        <p>
          Should you have any issues with the live stream video above, then
          please click on the button below instead:
        </p>
        <Link href="https://www.youtube.com/watch?v=ENrlvremOLA">
          <button className="border-2 my-4 px-3 py-2 rounded-xl bg-secondary text-">
            OPEN VIA YOUTUBE
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Livestream;
