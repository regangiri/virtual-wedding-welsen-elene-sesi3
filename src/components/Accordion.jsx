import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { Fragment, useState } from "react";

export default function Accordion(props) {
  const [open, setOpen] = useState(props.open);
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl p-2">
        <Disclosure open={open}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between   px-4 py-6 text-left text-sm font-medium text-black bg-[#f0ede6] shadow-secondary shadow-lg hover:bg-secondary rounded-md focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
                <span className="text-base sm:text-xl font-baskerville">
                  {props.accordionTitle}
                </span>
                <ChevronUpIcon
                  className={`${
                    open
                      ? "rotate-180 transform duration-500"
                      : "rotate-360 transform duration-500"
                  } h-5 w-5`}
                />
              </Disclosure.Button>
              <Transition
                appear
                show={open}
                as={Fragment}
                enter="transition duration-1000 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-1000 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 duration-500">
                  {props.children}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
