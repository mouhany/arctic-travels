import resortsImage from "../assets/david-klein-tmHFxb0G6i8-unsplash.jpg";
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
        className="py-12 md:py-24 min-h-screen 2xl:min-h-full bg-cover bg-center w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${resortsImage})` }}
      >
        <div className="w-full lg:bg-neutral-50/30 lg:my-12 flex h-full justify-center items-center lg:py-12">
          <div className="w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row lg:gap-12 items-center justify-center">
            <div className="w-full md:max-w-prose lg:w-2/5">{descResorts}</div>

            <div className="relative w-full lg:w-3/5 flex justify-center items-center">
              <ul className="w-full flex flex-col gap-3 justify-center items-center relative">
                {resortsData.map((resort, index) => (
                  <li
                    key={index}
                    className={`${
                      index === current
                        ? "opacity-100 relative"
                        : "opacity-0 absolute pointer-events-none"
                    } transition-opacity duration-500 ease-out w-full flex justify-center items-center`}
                  >
                    <div className="w-full">
                      <Slideshow index={index} {...resort} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resorts;
