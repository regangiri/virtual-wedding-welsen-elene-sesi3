import Image from "next/image";
import React from "react";
import timelineDummy from "../../public/assets/images/timeline.png";

function GroomBrideStory() {
  return (
    <div className="groom-bride-section w-full max-w-xl bg-primary py-12 text-md text-center">
      <h1 className="groom-bride-story-title text-4xl sm:text-5xl px-3 font-baskerville py-6">
        Our Story
      </h1>
      <div className="groom-bride-story-image mb-4 lg:h-96 lg:w-full h-64 max-w-lg px-6 mx-auto relative">
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
