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
        className="py-12 md:py-0 md:min-h-screen lg:min-h-full bg-offwhite lg:py-36 w-full flex flex-col md:flex-row"
      >
        <div className="flex flex-col lg:flex-row md:gap-12 items-center justify-center w-full max-w-screen-2xl mx-auto">
          <div className="w-full md:max-w-prose lg:w-2/5 2xl:rounded-l-3xl rounded-r-3xl lg:bg-neutral-200 flex flex-col items-center">
            {descRegions}
          </div>

          <div className="relative w-full lg:w-3/5 2xl:rounded-r-3xl md:rounded-l-3xl md:rounded-r-none lg:bg-neutral-200 overflow-hidden flex flex-col gap-3 lg:py-9">
            <h4 className="subtitle px-6 z-10">
              Some of our most popular destinations:
            </h4>
            <div className="sm:z-30 md:block absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-offwhite lg:from-neutral-200 to-transparent"></div>
            <ul className="flex flex-row gap-6 overflow-x-auto px-6">
              {allRegions}
            </ul>
            <div className="sm:z-30 md:block absolute top-0 right-0 w-12 h-full bg-gradient-to-r from-transparent to-offwhite lg:to-neutral-200"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Regions;
