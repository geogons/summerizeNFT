/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import HeroSection from "../components/Hero/Hero";
import NavComponent from "../components/Navigation/NavComponent";
import Footer from "../components/Footer/Footer"
import MintNFT from "../components/Mint/MintNFT"

export default function Home() {
  return (
    <div className=" text-black font-poppins bg-gradient-to-tr from-[#FFDC83] via-[#FFB9B9] to-[#00C5E8] ">
      <NavComponent />
      {/* <HeroSection /> */}
      <MintNFT/>
      <Footer />
    </div>
  );
}
