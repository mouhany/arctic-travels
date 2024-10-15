import lodgingImage from "../assets/edoardo-busti-s0rShYnmtEI-unsplash.jpg";
import { dataLodging } from "./data/dataLodging";
import Card from "./Card";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function Lodging() {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <div className="absolute w-full bg-gradient-to-b from-offwhite via-[#eaeff2] to-transparent h-40 z-10"></div>
      <section
        id="lodging"
        className="mx-auto bg-gradient-to-b from-[#eaeff2] from-20% via-[#e2e8ee] via-40% to-[#e7ecf0] to-80% flex flex-col lg:flex-row w-full items-center justify-center"
      >
        <img
          src={lodgingImage}
          alt="Lodging"
          className="mix-blend-darken w-full h-full"
        />
        <div className=" -mt-24 sm:-mt-48 lg:mt-0 z-20 flex flex-col gap-6 w-full items-center">
          <div className="max-w-prose px-6 py-12 flex flex-col gap-6">
            <h3 className="title">Find Your Ideal Winter Retreat</h3>
            <div className="flex flex-col gap-3">
              <p className="leading-normal">
                Enjoy premium accommodations that combine comfort and style.
                From cozy alpine cabins to luxurious five-star resorts,{" "}
                <strong className="text-xl">
                  We ensure your stay is as memorable as your time on the
                  slopes.
                </strong>{" "}
              </p>
              <p className="leading-normal">
                Select from a wide variety of lodgings that suit your
                preferences and budget.
              </p>
            </div>
            <button className="cta text-lg self-center">
              Secure your stay now
            </button>
          </div>

          <div className="flex flex-row gap-6 items-center">
            <button
              onClick={() =>
                setCurrent(current === 0 ? dataLodging.length - 1 : current - 1)
              }
            >
              <ChevronLeftIcon className="size-6" />{" "}
            </button>
            <div className="flex flex-col gap-6">
              <Card key={current} index={current} {...dataLodging[current]} />
            </div>
            <button
              onClick={() =>
                setCurrent(current === dataLodging.length - 1 ? 0 : current + 1)
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