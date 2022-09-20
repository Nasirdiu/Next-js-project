import Client from "../components/Client/Client";
import Discount from "../components/Discount/Discount";
import Banner from "../components/Home/Banner";
import Hotel from "../components/Hotel/Hotel";
import Images from "../components/images/Images";
import Review from "../components/Review/Review";
import Scroll from "../components/Scroll/Scroll";
import Footer from "../components/share/Footer";
import Navbar from "../components/share/Navbar";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />

      <div className="bg-black">
        <Banner></Banner>

        <Images />
        <Hotel />
        <Discount></Discount>
        <div className="bg-white">
          <Review />
        </div>
        <Client />
        <Footer></Footer>
        <Scroll />
      </div>
      
    </div>
  );
}
