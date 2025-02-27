import React from "react";
import locationIcon from "../assets/locationWhite.svg";
import callIcon from "../assets/callIcon.svg";
import emailIcon from "../assets/emailIcon.svg";
const Footer = () => {
  return (
    <>
      <footer class="bg-green-footer text-white">
        <div class="py-12">
          <div class=" mx-auto px-12">
            <div class="flex flex-wrap justify-between font-light ">
              <div class="w-full md:w-1/4 mb-8 md:mb-0 ">
                <div class="flex items-center mb-4">
                  <div class="bg-[#4BA586] rounded-full h-12 w-12 flex items-center justify-center">
                    <span class="text-white text-xl font-bold">BH</span>
                  </div>
                  <span class="ml-3 text-2xl font-semibold">BetaHouse</span>
                </div>
                <p class="mb-4">
                  Discover, rent, and find your ideal home hassle-free with
                  BetaHouse. Take control of your rental journey today!
                </p>
                <div class="flex items-center mb-2 gap-2">
                  <img src={locationIcon} alt="" />
                  <span>95 Tinubu Estate, Lekki, Lagos</span>
                </div>
                <div class="flex items-center mb-2 gap-2">
                  <img src={callIcon} alt="" />
                  <span>+234 675 8935 675</span>
                </div>
                <div class="flex items-center gap-2">
                  <img src={emailIcon} alt="" />
                  <span>support@rentbetahouse.com</span>
                </div>
              </div>
              <div class="w-full md:w-1/5 mb-8 md:mb-0 ">
                <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Home
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Properties
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      About
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Contact us
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-full md:w-1/5 mb-8 md:mb-0">
                <h3 class="text-xl font-semibold mb-4">More</h3>
                <ul>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Agents
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Affordable Houses
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      FAQ’s
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-full md:w-1/5">
                <h3 class="text-xl font-semibold mb-4">Popular Search</h3>
                <ul>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Apartment for sale
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Apartment for rent
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      3 bedroom flat
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Bungalow
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-8 border-t border-gray-footer pt-4 flex justify-between items-center font-extralight">
              <p class="text-sm">
                 Copyright 2023 Betahouse | Designed by Michael.fig
              </p>
              <a href="#" class="text-sm hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
