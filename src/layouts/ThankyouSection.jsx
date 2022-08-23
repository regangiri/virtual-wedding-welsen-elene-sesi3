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
        Terima Kasih
      </motion.h1>

      <motion.div ref={ref} animate={rightAnimation} className="thankyou-text ">
        <p className="xxs:text-base sm:text-lg font-semibold px-2">
          Merupakan sebuah kehormatan dan kebahagiaan bagi kami apabila anda
          berkenan hadir pada acara pernikahan ini
        </p>
        <div className="thankyou-family-name xxs:text-[14px] sm:text-lg px-3 py-6 font-semibold">
          <p className="text-base sm:text-xl">Kami yang berbahagia:</p>
          <p className="pt-1">
            Keluarga Bapak Erwin Sanjaya & Ibu Florensia Farah
          </p>
          <p className="pb-1">
            Keluarga Bapak Thio Tjoen Hwa & Ibu Tjung Djau Khiun
          </p>
        </div>
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
