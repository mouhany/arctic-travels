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
        className="md:py-24 lg:py-0 bg-offwhite lg:py-36 w-full flex flex-col md:flex-row"
      >
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-screen-2xl mx-auto md:gap-12">
          <div className="w-full md:w-2/5 2xl:rounded-l-3xl rounded-r-3xl md:bg-neutral-200 flex flex-col items-center">
            {descRegions}
          </div>

          <div className="relative w-full md:w-3/5 2xl:rounded-r-3xl md:rounded-l-3xl md:rounded-r-none md:bg-neutral-200 overflow-hidden flex flex-col gap-3 py-9">
            <h4 className="subtitle px-9 z-10">
              Some of our most popular destinations:
            </h4>
            <div className="md:block absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-offwhite md:from-neutral-200 to-transparent"></div>
            <ul className="flex flex-row gap-6 overflow-x-auto px-9">
              {allRegions}
            </ul>
            <div className="md:block absolute top-0 right-0 w-12 h-full bg-gradient-to-r from-transparent to-offwhite md:to-neutral-200"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Regions;
