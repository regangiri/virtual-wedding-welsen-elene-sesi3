import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { IoMailOpenOutline } from "react-icons/io5";

export default function Landing({ btnAction }) {
  const { query } = useRouter();

  return (
    <div className="flex items-center justify-center flex-col overflow-hidden">
      <div className="relative landing w-full max-w-xl h-screen bg-primary py-24 px-2 text-md text-center">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 mx-auto max-w-7xl sm:mt-24">
            <div className="text-center">
              <motion.h1
                animate="visible"
                initial="hidden"
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 2,
                    },
                  },
                  hidden: {
                    y: -100,
                    opacity: 0,
                  },
                }}
                className="text-lg tracking-tight flex flex-col lg:text-2xl"
              >
                <span className="block text-palewhite xl:inline font-baskerville tracking-wider drop-shadow-xl my-3 text-base md:text-3xl ">
                  THE WEDDING OF
                </span>
                <span className="block text-palewhite xl:inline text-4xl sm:text-6xl tracking-wider drop-shadow-xl my-3 font-baskerville py-6">
                  Welsen & Elene
                </span>
              </motion.h1>
              <motion.div
                animate="visible"
                initial="hidden"
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 2,
                    },
                  },
                  hidden: {
                    opacity: 0,
                  },
                }}
                className="w-48 md:w-60 mt-7 max-w-md mx-auto sm:flex sm:justify-center justify-center md:mt-8"
              >
                {/* <Image src={logo} alt="" /> */}
              </motion.div>
              <motion.div
                animate="visible"
                initial="hidden"
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 2,
                    },
                  },
                  hidden: {
                    opacity: 0,
                  },
                }}
                className="mt-5 max-w-md mx-auto flex-col sm:flex sm:justify-center justify-center md:mt-12"
              >
                <div className="guest-name text-white py-6 text-base sm:text-xl">
                  Kepada Yth. <br /> <b>{query.to}</b>
                </div>
                <div
                  className="rounded-md flex justify-center px-4"
                  onClick={btnAction}
                >
                  <a className="w-full text-center max-w-xs flex items-center space-x-2 justify-center border border-accent  backdrop-blur-md font-medium rounded-md text-white mx-auto hover:bg-white hover:text-black py-2 text-lg px-2">
                    <IoMailOpenOutline size="20" className="mr-2" />{" "}
                    <span>Buka Undangan</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
