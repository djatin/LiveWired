import React from "react";
import { images } from "./constants";
import left from "/public/images/left.svg";
import right from "/public/images/right.svg";
// import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className="slider">
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "banner--wrapper md:absolute md:inset-x-0 bottom-12"
              : "hidden"
          }`}
        >
          
          <div className="site--wrapper">
            <div className="badges pink-badge">Live</div>
            <div className="banner--title">
                <h3>{elem.title}</h3>
            </div>
            <div className="banner--text">{elem.desc}</div>
          </div>

          {/* <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
            <div
              className="absolute bottom-2 right-10 cursor-pointer"
              onClick={clickPrev}
            >
              <Image src={left} alt="" />
            </div>

            <div
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={clickNext}
            >
              <Image src={right} alt="" />
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Description;
