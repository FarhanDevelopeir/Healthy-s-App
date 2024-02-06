import React, { useState, useEffect } from "react";
import bgimg from "../Images/bg-img.jpg";
import almond from "../Images/1.png";
import akhrot from "../Images/2.png";
import kajuu from "../Images/3.png";
import nut from "../Images/4.png";
import almondR from "../Images/1R.png";
import akhrotR from "../Images/2R.png";
import kajuuR from "../Images/3R.png";
import nutR from "../Images/4R.png";



const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [almond, akhrot, kajuu, nut];
  const rSlides = [almondR, akhrotR, kajuuR, nutR];

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    setCurrentSlide(currentSlide === rSlides.length - 1 ? 0 : currentSlide + 1);

  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    setCurrentSlide(currentSlide === 0 ? rSlides.length - 1 : currentSlide - 1);

  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds, adjust as needed

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div>
      <img src={bgimg} className="h-[260px] sm:h-[500px] lg:h-[700px] w-full " alt="Background" />
      <div className="absolute   top-[100px] md:top-[120px] lg:top-42 w-full flex items-center">
      <button
            className="absolute top-1/2 left-4 lg:left-24 transform -translate-y-1/2 px-2 py-2 lg:px-3 lg:py-3 rounded-full bg-gray-800 text-white"
            onClick={prevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class=" h-3 md:h-5 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        <div >
{/*          
          <h1 className="text-[12px] lg:text-[35px] border font-semibold sm:text-2xl ml-14  w-[74%] lg:w-[60%] lg:m-auto sm:w-full  drop-shadow-xl">
          
            {currentSlide === 0 &&
              "Nutritious & delicious nuts for healthy snacking"}
            {currentSlide === 1 &&
              "Buttery, creamy, tasty nuts for delightful and healthy snacking"}
            {currentSlide === 2 &&
              "Crunchy, tasty nuts, perfect for healthy and satisfying snacking"}
            {currentSlide === 3 &&
              "Delicious, colorful nuts, perfect for healthy and enjoyable snacking"}
          </h1> */}
          
        </div>
       <div className="   ">
       <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className=" hidden md:block" />
       
       </div>
       <div className="  md:hidden block  ">
       <img src={rSlides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className=" " />
       
       </div>
       <button
            className="absolute top-1/2 right-4 lg:right-24 transform -translate-y-1/2 px-2 py-2 lg:px-3 lg:py-3 rounded-full bg-gray-800 text-white"
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class=" h-3 md:h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
      </div>
    </div>
  );
};

export default HeroSection;
