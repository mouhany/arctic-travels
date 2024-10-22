import Description from "./common/Description";
import { regionsText } from "./data/regionsText";
import Carousel from "./common/Carousel";
import { regionsData } from "./data/regionsData";

const allRegions = regionsData.map((region, index) => (
  <Carousel key={index} index={index} {...region} />
));

const descRegions = <Description {...regionsText} />;

function Regions() {
  return (
    <>
      <div className="absolute w-full bg-gradient-to-b from-transparent to-offwhite -mt-20 h-20 z-10"></div>
      <section
        id="regions"
        className="py-12 md:py-0 lg:py-36 min-h-screen 2xl:min-h-full bg-offwhite w-full flex"
      >
        <div className="w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row md:gap-12 items-center justify-center ">
          <div className="w-full md:max-w-prose lg:w-2/5 2xl:rounded-l-3xl rounded-r-3xl lg:bg-neutral-200">
            {descRegions}
          </div>

          <div className="relative w-full lg:w-3/5 overflow-hidden flex flex-col gap-3 lg:py-9 2xl:rounded-r-3xl md:rounded-l-3xl md:rounded-r-none lg:bg-neutral-200 ">
            <h4 className="subtitle px-6 z-20">
              Some of our most popular destinations:
            </h4>
            <div className="sm:z-10 md:block absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-offwhite lg:from-neutral-200 to-transparent"></div>
            <div className="sm:z-10 md:block absolute top-0 right-0 w-12 h-full bg-gradient-to-r from-transparent to-offwhite lg:to-neutral-200"></div>
            <ul className="z-0 flex flex-row gap-6 overflow-x-auto px-6">
              {allRegions}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Regions;
