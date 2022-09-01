import Image from "next/image";
import React from "react";
import timelineDummy from "../../public/assets/images/story.png";

function GroomBrideStory() {
  return (
    <div className="groom-bride-section w-full max-w-xl bg-primary pb-6 text-md text-center">
      <div className="groom-bride-story-image w-[15rem] h-[20rem] xxs:w-[22rem] xxs:h-[28rem] sm:w-[23rem] sm:h-[30rem]  xl:w-[28rem] xl:h-[35rem] mb-4   max-w-lg px-6 mx-auto relative">
        <Image
          src={timelineDummy}
          alt="Bride"
          layout="fill"
          objectFit="cover"
          className="rounded-md "
        />
      </div>
    </div>
  );
}

export default GroomBrideStory;
