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
    <div className="w-full max-w-xl bg-palewhite text-md text-center">
      <motion.h1
        animate={titleAnimation}
        className="text-sm font-semibold font-baskerville px-3"
      >
        Bagi undangan yang berhalangan hadir, kami mengundang anda untuk
        mengikuti acara Pemberkatan Pernikahan melalui <i>live streaming</i> di
        bawah ini
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
        {/* <p>LIVE ON Saturday, September 24th, 2022 | 11.00 WIB</p> */}
        <p className="font-semibold text-base px-6 font-baskerville">
          Jika <i>live stream</i> di atas bermasalah, silahkan gunakan tombol di
          bawah ini:
        </p>
        <Link href="https://www.youtube.com/watch?v=ENrlvremOLA">
          <a
            target="_blank"
            className="md:w-full lg:w-full text-center w-64 flex items-center space-x-2 justify-center px-8 py-3  border border-secondary bg-secondary text-white text-base font-medium rounded-3xl text-button  hover:backdrop-blur-xl hover:bg-transparent hover:text-secondary md:py-2 md:text-lg md:px-10 my-6 max-w-sm font-baskerville"
          >
            Open via Youtube
          </a>
        </Link>
      </motion.div>
    </div>
  );
}

export default Livestream;
