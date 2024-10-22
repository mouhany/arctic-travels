import lodgingImage from "../assets/edoardo-busti-s0rShYnmtEI-unsplash.jpg";
import Description from "./common/Description";
import { lodgingText } from "./data/lodgingText";
import { lodgingData } from "./data/lodgingData";
import Card from "./common/Card";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const descLodging = <Description {...lodgingText} />;

function Lodging() {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <div className="absolute w-full bg-gradient-to-b from-transparent via-offwhite  to-transparent h-40 z-10 -mt-20"></div>
      <section
        id="lodging"
        className="mx-auto bg-gradient-to-b from-[#eaeff2] from-20% via-[#e2e8ee] via-40% to-[#e7ecf0] to-80% flex flex-col lg:flex-row w-full items-center justify-center"
      >
        <a
          href="https://unsplash.com/photos/brown-cabin-covered-of-snow-beside-trees-at-daytime-s0rShYnmtEI"
          target="_blank"
          className="w-full lg:w-1/2 lg:me-24"
        >
          <img src={lodgingImage} alt="Lodging" className="mix-blend-darken" />
        </a>
        <div className="-mt-24 sm:-mt-48 lg:mt-0 lg:-ms-24 z-20 flex flex-col gap-6 w-full lg:w-1/2 items-center">
          <div className="max-w-prose">{descLodging}</div>

          <div className="flex flex-row gap-3 items-center">
            <button
              aria-label="Previous"
              className="rounded-full p-3"
              onClick={() =>
                setCurrent(current === 0 ? lodgingData.length - 1 : current - 1)
              }
            >
              <ChevronLeftIcon className="size-6" />{" "}
            </button>
            <Card key={current} index={current} {...lodgingData[current]} />
            <button
              aria-label="Next"
              className="rounded-full p-3"
              onClick={() =>
                setCurrent(current === lodgingData.length - 1 ? 0 : current + 1)
              }
            >
              <ChevronRightIcon className="size-6" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Lodging;
