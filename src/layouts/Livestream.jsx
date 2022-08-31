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
          duration: 0.2,
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
    <div className="w-full max-w-xl bg-palewhite text-md text-center py-6">
      <motion.h1
        animate={titleAnimation}
        className="groom-bride-title text-4xl sm:text-5xl px-3 font-baskerville py-6 text-secondary"
      >
        Livestream
      </motion.h1>
      <motion.h2
        animate={titleAnimation}
        className="text-sm font-semibold font-baskerville px-3"
      >
        As we&#39;d love to have your presence on our wedding day, please join
        via live streaming below if you are unable to attend
      </motion.h2>

      <motion.div
        animate={videoAnimation}
        ref={ref}
        className="flex flex-col items-center pb-6 lg:pb-0 w-full video-container mb-5"
      >
        <iframe
          className="relative m-auto w-full my-10 rounded-md shadow-lg"
          src="https://www.youtube.com/embed/ENrlvremOLA"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        {/* <p>LIVE ON Saturday, September 24th, 2022 | 11.00 WIB</p> */}
        <p className="font-semibold text-sm px-6 font-baskerville">
          Should there be any problem with live stream above, please click the
          button below
        </p>
        <Link href="https://www.youtube.com/watch?v=ENrlvremOLA">
          <a
            target="_blank"
            className="md:w-full lg:w-full text-center w-64 flex items-center space-x-2 justify-center px-8 py-3 border border-secondary bg-secondary text-white text-base font-medium rounded-3xl text-button  hover:backdrop-blur-xl hover:bg-transparent hover:text-secondary md:py-2 md:text-lg md:px-10 my-6 max-w-sm font-baskerville"
          >
            Open via Youtube
          </a>
        </Link>
      </motion.div>
    </div>
  );
}

export default Livestream;
