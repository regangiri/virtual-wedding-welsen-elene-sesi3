import React from "react";
import { ImagesStock } from "./ImagesStock";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import ModalNotif from "./ModalNotif";
import { Modal } from "./Modal";
import NewModal from "./NewModal";
import Image from "next/image";

export default function ImageGalleryV2() {
  const { ref, inView } = useInView();
  const titleAnimation = useAnimation();
  const videoAnimation = useAnimation();
  const [openModal, setOpenModal] = useState(false);
  const [indexNow, setIndexNow] = useState(0);

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
        y: 0,
        opacity: 0,
      });
      videoAnimation.start({
        opacity: 0,
      });
    }
  }, [inView]);

  const images = [
    {
      id: 1,
      name: "our moments",
      src: ImagesStock.ourmoment1,
    },
    {
      id: 2,
      name: "our moments",
      src: ImagesStock.ourmoment2,
    },
    {
      id: 3,
      name: "our moments",
      src: ImagesStock.ourmoment3,
    },
    {
      id: 4,
      name: "our moments",
      src: ImagesStock.ourmoment4,
    },
    {
      id: 5,
      name: "our moments",
      src: ImagesStock.ourmoment5,
    },
    {
      id: 6,
      name: "our moments",
      src: ImagesStock.ourmoment6,
    },
    {
      id: 7,
      name: "our moments",
      src: ImagesStock.ourmoment7,
    },
    {
      id: 8,
      name: "our moments",
      src: ImagesStock.ourmoment8,
    },
    {
      id: 9,
      name: "our moments",
      src: ImagesStock.ourmoment9,
    },
    {
      id: 10,
      name: "our moments",
      src: ImagesStock.ourmoment10,
    },
    {
      id: 11,
      name: "our moments",
      src: ImagesStock.ourmoment11,
    },
    {
      id: 12,
      name: "our moments",
      src: ImagesStock.ourmoment12,
    },
    {
      id: 13,
      name: "our moments",
      src: ImagesStock.ourmoment13,
    },
    {
      id: 14,
      name: "our moments",
      src: ImagesStock.ourmoment14,
    },
    {
      id: 15,
      name: "our moments",
      src: ImagesStock.ourmoment15,
    },
    {
      id: 16,
      name: "our moments",
      src: ImagesStock.ourmoment16,
    },
    {
      id: 17,
      name: "our moments",
      src: ImagesStock.ourmoment17,
    },
  ];

  const showImage = () => {
    return (
      <NewModal open={openModal} setOpen={setOpenModal}>
        <div className="groom-bride-image mb-4 lg:h-96 lg:w-full h-64 max-w-lg mx-auto relative">
          asdasd
          <Image
            src={images[indexNow].src}
            alt="image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </NewModal>
    );
  };

  return (
    <div
      ref={ref}
      className="container w-full max-w-xl bg-palewhite py-12 overlflow-hidden text-md text-center "
    >
      <motion.h1
        animate={titleAnimation}
        className="text-3xl xxs:text-4xl sm:text-5xl text-secondary drop-shadow-sm font-semibold text-center py-3 font-baskerville"
      >
        Our Moments
      </motion.h1>
      <div
        animate={videoAnimation}
        className="flex flex-col items-center lg:pb-0 w-full video-container mb-5"
      >
        <iframe
          className="relative m-auto w-full  rounded-md shadow-lg"
          src="https://www.youtube.com/embed/CGYE08T-nVA"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <motion.div
        animate={videoAnimation}
        className="images-container gap-3 columns-3"
      >
        {images.map((image, index) => {
          return (
            <img
              key={image.id}
              src={image.src}
              className="mb-3"
              loading="lazy"
              ismap="true"
              alt="loading"
              onClick={() => {
                setOpenModal(true);
                setIndexNow(index);
              }}
            />
          );
        })}
      </motion.div>
      <NewModal open={openModal} setOpen={setOpenModal}>
        <div className="groom-bride-image mb-4 w-full h-full max-w-lg mx-auto relative">
          <img
            src={images[indexNow].src}
            alt="image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </NewModal>
    </div>
  );
}
