import resortsImage from "../assets/sonalika-vakili-jIf8o8tG_DQ-unsplash.jpg";
import resortsImage2 from "../assets/david-klein-tmHFxb0G6i8-unsplash.jpg";
import Description from "./common/Description";
import { resortsText } from "./data/resortsText";
import Slideshow from "./common/Slideshow";
import { resortsData } from "./data/resortsData";
import { useState, useEffect } from "react";

const descResorts = <Description {...resortsText} />;

function Resorts() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % resortsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [resortsData.length]);

  return (
    <>
      <div className="absolute w-full bg-gradient-to-b from-transparent via-[#d7dbdf] to-transparent h-40 z-10 -mt-20"></div>
      <section
        id="resorts"
        className="flex flex-col lg:flex-row items-center justify-center gap-12 min-h-screen bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${resortsImage2})` }}
      >
        <div className="w-full bg-neutral-50/50">
          <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="border border-red-600 md:max-w-prose lg:w-2/5 w-full">
              {descResorts}
            </div>
            <ul className="relative border border-red-600 lg:w-3/5 w-full">
              {resortsData.map((resort, index) => (
                <li
                  key={index}
                  className={`${
                    index === current ? "opacity-100" : "opacity-0"
                  } px-6 py-9 absolute inset-0 transition-opacity duration-500 ease-out`}
                >
                  <Slideshow index={index} {...resort} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resorts;
