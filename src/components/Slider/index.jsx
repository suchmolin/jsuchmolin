import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";

export default function Slider() {
  const [currentImg, setCurrentImg] = useState(0);
  const images = ["bgcoffee.png", "desk.jpg", "desk2.jpg"];

  const nextImg = () => {
    if (currentImg === images.length - 1) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + 1);
    }
  };

  const prevImg = () => {
    if (currentImg === 0) {
      setCurrentImg(images.length - 1);
    } else {
      setCurrentImg(currentImg - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImg();
    }, 8000);
    return () => clearInterval(interval);
  });

  return (
    <div id="homePage" className="pagetoUp relative h-screen w-full">
      <section
        style={{
          backgroundSize: "110% 110%",
          backgroundImage: "url(./img/" + images[currentImg],
        }}
        className="bodyCont h-full w-full flex justify-start items-end pb-6 z-10"
      >
        {images[currentImg] === "desk.jpg" && (
          <section className="absolute h-3/4  left-14 lg:left-52">
            <div className="textSlider Poppins w-10/12 lg:w-auto  mt-24 lg:ml-10 ml-0 px-3 lg:px-6 py-6 lg:py-8 border-4 border-white text-white">
              <p className="text-4xl">Turn a Sentence</p>
              <p className="text-2xl">
                Into a <span>Code.</span>
              </p>
            </div>
          </section>
        )}
        <div className="typing Poppins ml-8 lg:ml-48">
          <h1 className="text-gray-200 text-4xl lg:text-5xl">
            José Suchmolin J.
          </h1>
          <h3 className="text-lg">Web Developer. {"{ </> }"}</h3>
        </div>
      </section>
      <section className="absolute top-0 h-full flex justify-between items-center w-full">
        <div
          onClick={prevImg}
          className="flex items-center text-3xl px-5 h-full bg-gradient-to-r from-black to-transparent opacity-15 hover:opacity-50 cursor-pointer transition-opacity duration-500 text-white"
        >
          <IoIosArrowBack />
        </div>
        <div
          onClick={nextImg}
          className="flex items-center text-3xl px-5 h-full bg-gradient-to-l from-black to-transparent opacity-15 hover:opacity-50 cursor-pointer transition-opacity duration-500 text-white"
        >
          <IoIosArrowForward />
        </div>
      </section>
    </div>
  );
}
