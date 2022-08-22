import { useState } from "react";
import { Modal } from "../components/Modal";
import { saveAs } from "file-saver";
import { ImagesStock } from "../components/ImagesStock";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "../../public/assets/images/groombridedummy.jpeg";

function Gift() {
  const [showModal, setShowModal] = useState(false);
  const [rspvModal, setRspvModal] = useState(false);

  const saveFile = () => {
    saveAs("/assets/images/tandat.jpg", "asdx.jpg");
  };

  return (
    <div className="w-full max-w-xl bg-[#f0ede6] py-12  text-md text-center">
      <div className="gift-container border-2 border-black m-12 py-20 bg-secondary rounded-2xl">
        <h1 className="font-vibes text-5xl md:text-7xl">Send Gift</h1>
        <p className="py-6 px-5 text-base font-sans leading-7 tracking-tighter">
          If you would like to express your kind wishes by sending us a gift,
          please use the button below:
        </p>
        <div className="gift-button flex flex-col items-center justify-center py-6">
          <button
            className=" px-11 w-60 flex items-center justify-center font-serif font-semibold rounded-md py-2 bg-accent my-1"
            onClick={() => setShowModal(true)}
          >
            SEND GIFT
          </button>
        </div>
      </div>
      <Modal open={showModal} setOpen={setShowModal}>
        <div className="flex flex-col justify-center text-center">
          <motion.h1
            // animate={titleAnimation}
            className="text-4xl font-typography font-semibold drop-shadow-sm drop text-secondary mb-8"
          >
            Gift
          </motion.h1>
          <motion.div
            // ref={ref}
            // animate={qrisAnimation}
            className="lg:w-96 w-52 mx-auto"
          >
            <Image
              src={ImagesStock.qris}
              alt="Qris"
              width="200"
              height="250"
              layout="responsive"
              objectFit="cover"
              className="rounded-xl"
            />
          </motion.div>

          <motion.button
            // animate={downloadButtonAnimation}
            onClick={saveFile}
            className="inline-flex drop-shadow-md justify-center lg:w-56 w-36 mx-auto mt-6 py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-button bg-secondary hover:bg-transparent hover:border-secondary hover:backdrop-blur-md hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
          >
            Download
          </motion.button>
        </div>
      </Modal>
    </div>
  );
}

export default Gift;
