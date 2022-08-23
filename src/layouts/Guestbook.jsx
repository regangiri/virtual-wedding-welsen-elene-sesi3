import { getGuestData, sendMessage } from "../helpers/supabase";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import ModalNotif from "../components/ModalNotif";

export default function Guestbook() {
  const [guestData, setGuestData] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [onSubmitStatus, setOnSubmitStatus] = useState(false);
  const { ref, inView } = useInView();
  const titleAnimation = useAnimation();
  const guestbookAnimation = useAnimation();
  const messageAnimation = useAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setOnSubmitStatus(true);
    sendMessage({ name, message });
    setShowModal(true);
    resetForm();
  };

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
      guestbookAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
      messageAnimation.start({
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
      guestbookAnimation.start({
        x: 0,
        opacity: 0,
      });
      messageAnimation.start({
        x: 0,
        scale: 0,
        opacity: 0,
        transition: {
          duration: 1.2,
        },
      });
    }
  }, [inView]);

  const resetForm = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    Array.from(document.querySelectorAll("textarea")).forEach(
      (input) => (input.value = "")
    );
    setName("");
    setMessage("");
  };

  useEffect(() => {
    getGuestData().then((data) => {
      setGuestData(data);
    });
  }, []);

  useEffect(() => {
    getGuestData().then((data) => {
      setGuestData(data);
      setOnSubmitStatus(false);
    });
  }, [onSubmitStatus]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-xl bg-primary py-12  ">
      <div className="absolute inset-0">
        {/* <div className="absolute inset-y-0 left-0 w-full bg-gray-50" /> */}
      </div>
      <div className="relative w-full">
        <div className="bg-primary py-10 px-6 sm:px-6 lg:col-span-5 lg:px-14 lg:py-16 xl:pr-12 w-full">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <motion.h1
              animate={titleAnimation}
              className="text-4xl font-typography font-semibold text-secondary pb-10"
            >
              Prayer and Wishes
            </motion.h1>
            <form
              onSubmit={handleSubmit}
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-y-6"
            >
              <motion.div animate={guestbookAnimation}>
                <label htmlFor="name" className="sr-only">
                  Full name
                </label>
                <input
                  required
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  name="name"
                  maxLength="30"
                  id="name"
                  autoComplete="off"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  placeholder="Full name"
                />
              </motion.div>

              <motion.div animate={guestbookAnimation}>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  autoComplete="off"
                  maxLength="150"
                  required
                  onChange={(event) => setMessage(event.target.value)}
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  placeholder="Write your message here"
                  defaultValue={""}
                />
              </motion.div>

              <motion.div ref={ref} animate={guestbookAnimation}>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-palewhite bg-secondary hover:bg-transparent hover:border-secondary hover:backdrop-blur-md hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                >
                  Send Pray & Wish
                </button>
              </motion.div>
            </form>
          </div>
        </div>
        <div className="wishes-box py-10 lg:col-span-7 lg:py-3 px-3 xl:px-6">
          <div className="overflow-y-scroll scrollbar-hide h-96   ">
            {guestData &&
              guestData.map((guest, index) => {
                return (
                  <motion.div
                    animate={messageAnimation}
                    className="flex items-center  py-4 my-3 bg-white rounded-xl px-2"
                    key={index}
                  >
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://ui-avatars.com/api/?name=${guest.name}`}
                        alt=""
                      />
                    </div>
                    <div className="ml-4 w-full">
                      <div className="text-sm leading-5 font-medium text-accent break-words ">
                        {guest.name}
                      </div>
                      <div className="mt-0 text-sm leading-5 text-black break-words">
                        {guest.message}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>

      <ModalNotif
        open={showModal}
        setOpen={setShowModal}
        title="Message has been sent!"
        description={
          "Thank you for the wishes and prayers. Your message should appear in message box shortly"
        }
      />
    </div>
  );
}
