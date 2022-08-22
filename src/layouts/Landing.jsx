import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Landing({ btnAction }) {
  const router = useRouter();

  return (
    <div className="flex  items-center justify-center flex-col">
      <div className="relative landing w-full max-w-xl h-screen bg-primary py-24 px-2 text-md text-center">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 mx-auto max-w-7xl px-16 sm:mt-24">
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
                className="text-lg tracking-tight flex flex-col  lg:text-2xl"
              >
                <span className="block text-palewhite xl:inline font-serif tracking-wider drop-shadow-xl my-3 text-3xl">
                  THE WEDDING OF
                </span>
                <span className="block text-palewhite xl:inline text-6xl tracking-wider drop-shadow-xl my-3 font-vibes">
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
                className="mt-5 max-w-md mx-auto b sm:flex sm:justify-center justify-center md:mt-12"
              >
                <div
                  className="rounded-md  flex justify-center"
                  onClick={btnAction}
                >
                  <a className="md:w-full lg:w-full text-center w-64 flex items-center space-x-2 justify-center px-8 py-3  border border-accent  backdrop-blur-md text-base font-medium rounded-md text-white  hover:bg-white hover:text-black md:py-2 md:text-lg md:px-10">
                    <span>Open The Invitation</span>{" "}
                    <div className="h-6 w-6" aria-hidden="true" />
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
