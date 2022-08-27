import groomBrideImage from "../../public/assets/images/groombridedummy.jpeg";
import Image from "next/image";
import { ImagesStock } from "../components/ImagesStock";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

function ThankyouSection() {
  const { ref, inView } = useInView();
  const titleAnimation = useAnimation();
  const videoAnimation = useAnimation();
  const rightAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      titleAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 2,
        },
      });
      videoAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 3,
        },
      });
      rightAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      titleAnimation.start({
        y: 0,
        opacity: 0,
      });
      videoAnimation.start({
        x: 0,
        opacity: 0,
      });
      rightAnimation.start({
        x: 0,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xl bg-primary py-12 text-md text-center font-serif">
      <motion.h1
        animate={titleAnimation}
        className="font-baskerville text-5xl font-bold py-6"
      >
        Thank You
      </motion.h1>

      <motion.div ref={ref} animate={rightAnimation} className="thankyou-text ">
        <motion.div
          animate={videoAnimation}
          className="logo h-44 w-44 mx-auto relative"
        >
          <Image src={ImagesStock.logoPengantin} layout="fill" alt="logo" />
        </motion.div>
        <p className="font-bold py-6 text-xl">#SENtforELENE</p>
      </motion.div>
    </div>
  );
}

export default ThankyouSection;
