import React from "react";
import { ImagesStock } from "./ImagesStock";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
// import ReactPlayer from "react-player";

export default function ImageGalleryV2() {
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
          duration: 0.4,
        },
      });
    }
    if (!inView) {
      titleAnimation.start({
        y: -70,
        opacity: 0,
      });
      videoAnimation.start({
        opacity: 0,
      });
    }
  }, [inView]);

  const images = [
    {
      name: "our moments",
      src: ImagesStock.ourmoment1,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment2,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment3,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment4,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment5,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment6,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment7,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment8,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment9,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment10,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment11,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment12,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment13,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment14,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment15,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment16,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment17,
    },
  ];

  return (
    <div className="container w-full max-w-xl bg-palewhite py-12 px-2 text-md text-center ">
      <motion.h1
        animate={titleAnimation}
        className="text-5xl text-secondary drop-shadow-sm font-semibold text-center pb-8 font-vibes"
      >
        Our Moments
      </motion.h1>
      <motion.div
        animate={videoAnimation}
        ref={ref}
        className="images-container gap-3 columns-3"
      >
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image.src}
              className="mb-3"
              loading="eager"
              ismap="true"
              alt="loading"
            />
          );
        })}
      </motion.div>
      {/* <motion.div
        animate={videoAnimation}
        className="video-prewed flex flex-col items-center  w-full mb-5"
      >
        <h3 className="font-vibes text-5xl pt-24">Prewedding Video</h3>
        <ReactPlayer
          className="relative m-auto w-full rounded-xl"
          url="/assets/video/videoprewed.mp4"
          width="540px"
          controls={true}
        />
      </motion.div> */}
    </div>
  );
}
