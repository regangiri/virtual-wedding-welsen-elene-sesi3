import Image from "next/image";
import groomBrideImage from "../../public/assets/images/groombridedummy.jpeg";
import { ImagesStock } from "../components/ImagesStock";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function GroomBride() {
  const { ref, inView } = useInView();

  const titleAnimation = useAnimation();
  const imageAnimation = useAnimation();
  const messageAnimation = useAnimation();
  const groomNameAnimation = useAnimation();
  const brideNameAnimation = useAnimation();

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
      imageAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
      groomNameAnimation.start({
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }),
        brideNameAnimation.start({
          x: 0,
          scale: 1,
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
      imageAnimation.start({
        x: 0,
        opacity: 0,
      });
      groomNameAnimation.start({
        x: -50,
        scale: 1,
        opacity: 0,
        transition: {
          duration: 1.2,
        },
      });
      brideNameAnimation.start({
        x: -50,
        scale: 1,
        opacity: 0,
        transition: {
          duration: 1.2,
        },
      });
    }
  }, [inView]);

  return (
    <div className="groom-bride-section w-full max-w-xl bg-primary py-12 text-md text-center">
      <motion.h2
        animate={titleAnimation}
        className="groom-bride-title text-5xl sm:text-7xl font-vibes py-6"
      >
        Groom & Bride
      </motion.h2>

      <motion.div
        animate={imageAnimation}
        className="groom-bride-image mb-4 lg:h-96 lg:w-full h-64 max-w-lg mx-auto relative"
      >
        <Image
          src={ImagesStock.brideGroom}
          alt="Bride"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </motion.div>
      <div
        ref={ref}
        className="groom-bride-desc flex items-center justify-around"
      >
        <motion.div
          animate={groomNameAnimation}
          className="groom-desc flex items-center justify-center flex-col font-baskerville"
        >
          <h3 className="text-2xl xxs:text-3xl sm:text-5xl font-bold text-center font-vibes border-b-2 border-secondary text-secondary h-1/2  my-6 py-3">
            Welsen Lowis
          </h3>
          <p className="text-xs sm:text-base  font-baskerville">
            <h4 className="font-bold text-xl">Anak pertama dari:</h4> <br />{" "}
            Bapak Erwin Sanjaya
            <br /> & <br />
            Ibu Florensia Farah
          </p>
        </motion.div>
        <motion.div
          animate={brideNameAnimation}
          className="bride-desc flex items-center justify-center flex-col font-baskerville"
        >
          <h3 className="text-2xl xxs:text-3xl sm:text-5xl font-bold text-center font-vibes border-b-2 border-secondary text-secondary h-1/2  my-6 py-3">
            Elene Delfia
          </h3>
          <p className="text-xs sm:text-base font-baskerville">
            <h4 className="font-bold text-xl"> Anak kedua dari:</h4> <br />
            Bapak Thio Tjoen Hwa <br />
            & <br />
            Ibu Tjung Djau Khiun
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default GroomBride;
