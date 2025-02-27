import React, { useState } from "react";
import Navbar from "./Navbar";
import minus from "../assets/minusBtn.svg";
import plus from "../assets/plusBtn.svg";
import lines from "../assets/Line 6.svg";
import CartPage from "./CartPage";
import DiscoverSection from "./DiscoverSection";
import Footer from "./Footer";

const HomePage = () => {
  const [number, setNumber] = useState(0);
  if (number < 0) {
    setNumber(0);
  }

  return (
    <>
      <main className="font-outfit">
        <section className="bg-main bg-cover bg-center min-h-screen text-white ">
          <Navbar />
          <div className="flex flex-col justify-center items-center min-h-screen text-center px-4 md:px-0">
            <h1 className="text-[190%] md:text-[68px] font-[650]">
              Browse Our Properties
            </h1>
            <p className="my-10 text-sm md:text-base w-full md:w-[35%]">
              Find your perfect home among our curated properties. Start
              browsing now!
            </p>
            <div className="backdrop-contrast-50 p-5 flex flex-col md:flex-row justify-center items-center w-full md:w-[80%]">
              <div className="flex flex-col md:flex-row items-center bg-white text-black md:rounded-bl-lg md:rounded-tl-lg rounded-t-lg py-3 px-5 md:px-10 w-full ">
                <div className="w-full mb-4 md:mb-0">
                  <p className="lg:text-left font-bold text-[15px]">LOCATION</p>
                  <input
                    type="text"
                    placeholder="eg. Gbagada"
                    className="w-full focus:outline-0 placeholder:text-center text-center lg:text-left lg:placeholder:text-left"
                  />
                </div>
                <img src={lines} alt="" className="hidden md:block" />
                <div className="w-full mb-4 md:mb-0">
                  <p className="font-bold text-[15px]">PROPERTY TYPE</p>
                  <input
                    type="text"
                    placeholder="eg. Duplex, Bedroom Flat"
                    className="w-full placeholder:text-center text-center focus:outline-0"
                  />
                </div>
                <img src={lines} alt="" className="hidden md:block" />
                <div className="w-full">
                  <p className="font-bold text-[15px]">BEDROOM</p>
                  <div className="flex gap-5 justify-center">
                    <img
                      src={minus}
                      alt=""
                      className="cursor-pointer"
                      onClick={() => setNumber(number - 1)}
                    />
                    <span>{number}</span>
                    <img
                      src={plus}
                      alt=""
                      className="cursor-pointer"
                      onClick={() => setNumber(number + 1)}
                    />
                  </div>
                </div>
              </div>
              <button className="bg-green p-6 w-full md:w-[30%] text-[14.7px] md:rounded-br-lg md:rounded-tr-lg rounded-b-lg cursor-pointer hover:bg-green-800 ">
                Find Property
              </button>
            </div>
          </div>
        </section>
        <CartPage />
        <DiscoverSection />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
