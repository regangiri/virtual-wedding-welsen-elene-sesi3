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
        className="font-vibes text-5xl font-bold py-6"
      >
        Thank You
      </motion.h1>

      <motion.div
        animate={videoAnimation}
        ref={ref}
        className="logo h-44 w-44 mx-auto relative"
      >
        <Image src={ImagesStock.logoPengantin} layout="fill" alt="logo" />
      </motion.div>
      <motion.div animate={rightAnimation} className="thankyou-text ">
        <h3 className="font-vibes text-5xl py-3 ">Welsen & Elene</h3>
        <p className="xxs:text-base sm:text-lg">
          {`It will be a joy for us if you are still willing to give your blessing
          from afar. Please know that you are in our thoughts and will be in our
          hearts, even though we are deeply sorry, we can't invite you to the
          ceremony due to the pandemic restriction.`}
        </p>

        <p className="font-bold py-6">#SENtforELENE</p>
      </motion.div>
    </div>
  );
}

export default ThankyouSection;
