import React, { useState } from "react";
import filterIcon from "../assets/filterIcon.svg";
import locationIcon from "../assets/locationIcon.svg";
import bedIcon from "../assets/bedIcon.svg";
import bathIcon from "../assets/bathIcon.svg";
import swapIcon from "../assets/swapIcon.svg";
import shareIcon from "../assets/shareIcon.svg";
import loveIcon from "../assets/loveIcon.svg";
import linkIcon from "../assets/linkIcon.svg";
import videoIcon from "../assets/videoIcon.svg";
import imageIcon from "../assets/imgIcon.svg";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import { dummyData } from "./cart";

const CartPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentItems = dummyData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <main className="lg:p-15 p-5">
        <div className="flex flex-col md:flex-row justify-between items-center mb-5">
          <div className="flex flex-col md:flex-row gap-5 items-center font-medium">
            <div className="flex gap-2 items-center">
              <img src={filterIcon} alt="" />
              <span>More Filter</span>
            </div>
            <p>Showing 1 – 9 of {dummyData.length} results</p>
          </div>
          <div className="flex gap-3 items-center mt-3 md:mt-0">
            <p className="text-gray-black">Sort by:</p>
            <select className="focus:outline-0 font-medium">
              <option value="price">Default</option>
              <option value="location">Location</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-3">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden bg-white outline-1 outline-gray-200 space-y-2 mb-5 w-full"
            >
              <div className="relative">
                <img
                  alt="Interior view of a luxurious villa with modern furniture and decor"
                  className="w-full contrast-125"
                  src={item.imageUrl}
                />
                {item.featured && (
                  <button className="absolute top-2 left-2 bg-green text-white text-xs px-2 py-1 rounded w-[96.49px] h-[36.19px]">
                    Featured
                  </button>
                )}
                {item.forSale && (
                  <button className="absolute top-2 right-2 backdrop-brightness-75 text-white text-xs px-2 py-1 rounded w-[96.49px] h-[36.19px]">
                    For Sale
                  </button>
                )}
                <div className="absolute bottom-2 right-2 flex space-x-2">
                  <button className="backdrop-brightness-75 p-4 rounded-sm">
                    <img src={linkIcon} alt="" />
                  </button>
                  <button className="backdrop-brightness-75 p-4 rounded-sm">
                    <img src={videoIcon} alt="" />
                  </button>
                  <button className="backdrop-brightness-75 p-4 rounded-sm">
                    <img src={imageIcon} alt="" />
                  </button>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600 flex items-center gap-2 mt-2">
                  <img src={locationIcon} alt="" />
                  {item.location}
                </p>
                <div className="flex items-center pb-3 gap-4">
                  <div className="flex items-center mr-4">
                    <img src={bedIcon} alt="" />
                    <span className="ml-1 text-gray-600">
                      {item.bedrooms} Bedrooms
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img src={bathIcon} alt="" />
                    <span className="ml-1 text-gray-600">
                      {item.bathrooms} Bathrooms
                    </span>
                  </div>
                </div>
                <div className="mt-4 border-t border-gray-300 pt-7">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">{item.price}</span>
                    <div className="flex items-center space-x-4">
                      <button className="text-gray-600">
                        <img src={swapIcon} alt="" />
                      </button>
                      <button className="text-gray-600">
                        <img src={shareIcon} alt="" />
                      </button>
                      <button className="text-gray-600">
                        <img src={loveIcon} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-2 m-auto justify-center font-medium">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <img src={leftArrow} alt="" />
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`px-3 py-1 ${
                currentPage === index + 1
                  ? "bg-green text-white"
                  : "text-gray-700 hover:text-gray-900"
              } rounded`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <img src={rightArrow} alt="" />
          </button>
        </div>
      </main>
    </>
  );
};

export default CartPage;
