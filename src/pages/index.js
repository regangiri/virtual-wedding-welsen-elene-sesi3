import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import ImageGalleryV2 from "../components/ImageGalleryV2";
import MusicPlayer from "../components/MusicPlayer";
import Footer from "../layouts/Footer";
import Gift from "../layouts/Gift";
import GroomBride from "../layouts/GroomBride";
import Guestbook from "../layouts/Guestbook";
import HeroHome from "../layouts/HeroHome";
import Landing from "../layouts/Landing";
import Layout from "../layouts/layout";
import Livestream from "../layouts/Livestream";
import PlaceAndTime from "../layouts/PlaceAndTime";
import Rsvp from "../layouts/Rsvp";
import ThankyouSection from "../layouts/ThankyouSection";
import GroomBrideStory from "../layouts/GroomBrideStory";

export default function Home() {
  const [isLanding, setIsLanding] = useState(true);

  const handleClick = () => {
    setIsLanding(false);
  };

  if (isLanding) {
    return (
      <>
        <Head>
          <title>Welsen Elene Wedding Invitation</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Landing btnAction={handleClick} />
      </>
    );
  }

  return (
    <Layout>
      <HeroHome />
      <GroomBride />
      {/* <GroomBrideStory /> */}
      <PlaceAndTime />
      <Rsvp />
      <Guestbook />
      <Livestream />
      <ImageGalleryV2 />
      <ThankyouSection />
      {/* <Gift /> */}
      {/* <Footer /> */}
      <MusicPlayer />
    </Layout>
  );
}
