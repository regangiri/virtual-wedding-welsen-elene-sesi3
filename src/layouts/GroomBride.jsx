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
    <div
      ref={ref}
      className="groom-bride-section w-full max-w-xl bg-primary py-12 text-md text-center"
    >
      <motion.h2
        animate={titleAnimation}
        className="groom-bride-title text-4xl sm:text-5xl px-3 font-baskerville py-6"
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
      <div className="groom-bride-desc flex items-center justify-around">
        <motion.div
          animate={groomNameAnimation}
          className="groom-desc flex items-center justify-center flex-col font-baskerville"
        >
          <h3 className="text-xl xxs:text-2xl sm:text-4xl font-bold text-center font-serif border-b-2 border-secondary text-secondary h-1/2  my-6 py-3">
            Welsen Lowis
          </h3>
          <h4 className="text-xs sm:text-base  font-baskerville">
            <p className="font-bold text-xs md:text-base">First son of:</p>{" "}
            <p className="text-xs md:text-base">
              <br />
              Mr. Erwin Sanjaya
              <br /> & <br />
              Mrs. Florensia Farah
            </p>
          </h4>
        </motion.div>
        <motion.div
          animate={brideNameAnimation}
          className="bride-desc flex items-center justify-center flex-col font-baskerville"
        >
          <h3 className="text-xl xxs:text-2xl sm:text-4xl font-bold text-center font-serif border-b-2 border-secondary text-secondary h-1/2  my-6 py-3">
            Elene Delfia
          </h3>
          <h4 className="text-xs sm:text-base font-baskerville">
            <p className="font-bold text-xs md:text-base">
              Second daughter of:
            </p>{" "}
            <p className="text-xs md:text-base">
              {" "}
              <br />
              Mr. Thio Tjoen Hwa <br />
              & <br />
              Mrs. Tjung Djau Khiun
            </p>
          </h4>
        </motion.div>
      </div>
    </div>
  );
}

export default GroomBride;
