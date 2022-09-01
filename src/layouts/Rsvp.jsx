import { useEffect, useState } from "react";
import { addRSVP } from "../helpers/supabase";
import Select from "../components/Select";
import ModalNotif from "../components/ModalNotif";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { IoMapOutline as MapIcon } from "react-icons/io5";
import Link from "next/link";

const options = [
  { id: 1, value: "Hadir" },
  { id: 2, value: "Tidak Hadir" },
];

const jumlahOrang = [
  { id: 1, value: 0 },
  { id: 2, value: 1 },
  { id: 3, value: 2 },
];

function Rsvp() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [receptionGuest, setReceptionGuest] = useState(0);
  const [matrimonyGuest, setMatrimonyGuest] = useState(0);
  const [confirmation, setConfirmation] = useState(options[0]);
  const [pemberkatanRsvp, setPemberkatanRsvp] = useState("");
  const [resepsiRsvp, setResepsiRsvp] = useState("");

  const { ref, inView } = useInView();
  const titleAnimation = useAnimation();
  const videoAnimation = useAnimation();
  const rightAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      titleAnimation.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
      videoAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
      rightAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      titleAnimation.start({
        opacity: 0,
      });
      videoAnimation.start({
        x: 0,
        opacity: 0,
      });
      rightAnimation.start({
        x: 0,
        opacity: 0,
      });
    }
  }, [inView]);

  const resetForm = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    document.querySelector('input[name="pemberkatan"]:checked').checked = false;
    document.querySelector('input[name="resepsi"]:checked').checked = false;
    setName("");
    setTelephone("");
    setMatrimonyGuest(0);
    setReceptionGuest(0);
    setPemberkatanRsvp("");
    setResepsiRsvp("");
    setConfirmation(options[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRSVP(
      name,
      telephone,
      pemberkatanRsvp,
      matrimonyGuest,
      resepsiRsvp,
      receptionGuest
    );
    setShowModal(true);
    resetForm();
  };
  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-xl bg-primary py-6">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 bg-gray-50" />
      </div>
      <div className="relative lg:grid lg:grid-cols-1 ">
        {/* <div className="flex flex-col items-center justify-center text-sm font-semibold font-baskerville ">
          <h1 className="text-xl xxs:text-3xl sm:text-5xl font-baskerville mb-10 font-medium border-b-2 border-black pb-3">
            Intimate Reception
          </h1>
          <p className="text-[22px] font-semibold font-baskerville py-1">
            Sabtu, 24 September 2022
          </p>
          <div className="flex text-xs xxs:text-sm items-center font-baskerville justify-center py-3 w-full">
            <div className="flex px-2 text-sm xxs:text-[15px] flex-col items-center justify-center w-full">
              <p className="font-bold  ">Tea Pai</p>
              <p className="">14.00 - 15.00 WIB</p>
            </div>
            <div className="border-l-[1px] text-sm xxs:text-[15px] xxs:px-2 font-baskerville border-black flex items-center justify-center flex-col w-full">
              <p className="font-bold">
                Intimate Reception<sup>*)</sup>
              </p>
              <p className="">16.00 - 17.30 WIB</p>
            </div>
          </div>
          <div className="address-box flex flex-col items-center justify-center text-sm font-semibold font-baskerville py-3">
            <p className="pt-2 text-[22px] py-2">
              Morrissey Hotel, 6<sup>th</sup> Floor{" "}
            </p>
            <p className="text-xs text-center sm:text-base px-2 pb-6">
              Jl. KH Wahid Hasyim No.70, Menteng, Jakarta Pusat
            </p>
            <Link href={`https://goo.gl/maps/MYM5sQHHyDWeBPTn9`}>
              <a
                target="_blank"
                className="md:w-full lg:w-full text-center w-64 flex items-center space-x-2 justify-center px-8 py-3  border border-secondary bg-secondary text-white text-base font-medium rounded-3xl text-button  hover:backdrop-blur-xl hover:bg-transparent hover:text-secondary md:py-2 md:text-lg md:px-10 max-w-sm font-baskerville"
              >
                <MapIcon className="h-6 w-6" aria-hidden="true" />{" "}
                <span className="hover:cursor-pointer">See Location</span>
              </a>
            </Link>
          </div>
        </div>
        <div
          animate={videoAnimation}
          className="nb ml-2 px-4 text-left text-sm font-bold font-baskerville"
        >
          *) Intimate reception will be held on outdoor area
        </div> */}
        <div className="lg:col-span-12 py-16  xl:col-span-3 xl:rounded-r-2xl xl:rounded-l-none lg:rounded-b-2xl lg:border px-auto">
          <div className="flex flex-col items-center justify-center text-sm font-semibold font-baskerville">
            <h1
              animate={videoAnimation}
              className="text-4xl sm:text-5xl font-baskerville mb-8 font-bold  pb-3"
            >
              RSVP
            </h1>
            <h1
              animate={videoAnimation}
              className="text-base mx-auto w-full text-left px-10 relative font-baskerville mb-8 font-semibold"
            >
              Please confirm your availability. We&#39;d love to promptly
              receive your response
            </h1>
            <form
              animate={rightAnimation}
              onSubmit={handleSubmit}
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-y-6 px-10 lg:px-0"
              id="formRSVP"
            >
              <div className="lg:mx-auto md:mx-auto">
                <p className="text-base font-baskerville font-semibold">
                  Full Name
                </p>
                <label htmlFor="name" className="sr-only">
                  Full name
                </label>
                <input
                  autoComplete="off"
                  required
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  className="block shadow-sm lg:w-96 w-full md:w-[500px] py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                />
              </div>
              <div className="lg:mx-auto md:mx-auto">
                <p className="text-base font-baskerville font-semibold">
                  Phone Number
                </p>
                <label htmlFor="telephone" className="sr-only">
                  Telephone Number
                </label>
                <input
                  autoComplete="off"
                  required
                  onChange={(event) => setTelephone(event.target.value)}
                  type="number"
                  name="telephone"
                  id="telephone"
                  className="block shadow-sm lg:w-96 w-full md:w-[500px] py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                />
              </div>

              <h5 className="py-0 text-base font-medium font-baskerville">
                Will you attend
                <b> Holy Matrimony (St. Theresia Church) ? </b>
              </h5>
              <div
                onChange={(e) => {
                  setPemberkatanRsvp(e.target.value);
                  console.log(e.target.value);
                }}
                className="flex items-center mx-auto lg:w-96 w-full md:w-[500px] text-base font-baskerville"
              >
                <input
                  type="radio"
                  id="ya"
                  name="pemberkatan"
                  value="ya"
                  required
                />
                <label htmlFor="ya" className="flex items-center px-1">
                  Yes, I will attend 😃
                </label>

                <input
                  type="radio"
                  id="tidak"
                  name="pemberkatan"
                  value="tidak"
                />
                <label className="flex items-center px-1" htmlFor="tidak">
                  No, sorry ☹️
                </label>
              </div>
              <div className="mx-auto lg:w-96 w-full md:w-[500px]">
                <p className="text-base font-baskerville font-semibold">
                  Number of Guest
                </p>
                <input
                  autoComplete="off"
                  required
                  onChange={(event) => setMatrimonyGuest(event.target.value)}
                  type="number"
                  name="total-guest"
                  id="total-guest"
                  className="block shadow-sm lg:w-96 w-full md:w-[500px] py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                />
              </div>
              <h5 className="py-0 text-base font-medium font-baskerville">
                Will you attend
                <b> Intimate Reception (Morrissey Hotel) ?</b>
              </h5>

              <div
                onChange={(e) => {
                  setResepsiRsvp(e.target.value);
                  console.log(e.target.value);
                }}
                className="flex items-center mx-auto lg:w-96 w-full md:w-[500px] text-base font-baskerville"
              >
                <input
                  type="radio"
                  id="ya"
                  name="resepsi"
                  value="ya"
                  required
                />
                <label htmlFor="ya" className="flex items-center px-1">
                  Yes, I will attend 😃
                </label>

                <input type="radio" id="tidak" name="resepsi" value="tidak" />
                <label className="flex items-center px-1" htmlFor="tidak">
                  No, sorry ☹️
                </label>
              </div>
              <div className="mx-auto lg:w-96 w-full md:w-[500px]">
                <p className="text-base font-baskerville font-semibold">
                  Number of Guest
                </p>
                <input
                  autoComplete="off"
                  required
                  onChange={(event) => setReceptionGuest(event.target.value)}
                  type="number"
                  name="total-guest"
                  id="total-guest"
                  className="block shadow-sm lg:w-96 w-full md:w-[500px] py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                />
              </div>
              <div className="mx-auto lg:w-96 w-full md:w-[500px]">
                <button
                  type="submit"
                  className="inline-flex lg:w-96 w-full md:w-[500px] justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-secondary hover:bg-transparent hover:border-secondary hover:backdrop-blur-md hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 font-baskerville focus:ring-accent"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ModalNotif
        open={showModal}
        setOpen={setShowModal}
        title="RSVP has been sent!"
        description={"RSVP has been sent.Thank you for your participation."}
      />
    </div>
  );
}

export default Rsvp;
