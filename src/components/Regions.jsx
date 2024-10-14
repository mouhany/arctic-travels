import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { dataRegions } from "./data/dataRegions";
import Region from "./Region";

const allRegions = dataRegions.map((region, index) => (
  <Region key={index} index={index} {...region} />
));

function Regions() {
  return (
    <>
      <div className="absolute w-full bg-gradient-to-b from-transparent to-offwhite to-90% -mt-20 h-20 z-10"></div>
      <section
        className="bg-offwhite min-h-screen flex flex-col md:flex-row items-center"
        id="regions"
      >
        <div className="max-w-screen-2xl mx-auto w-full flex flex-col gap-6 md:flex-row md:items-center h-full">
          <div className="rounded-r-3xl md:bg-slate-500/10 w-full md:w-2/5 px-6 py-12 flex flex-col gap-6 lg:gap-12">
            <h3 className="title">
              Discover Your Perfect Winter Destination
            </h3>
            <div className="flex flex-col gap-3 lg:gap-6">
              <p className="leading-normal">
                From the towering peaks of the Alps to the pristine powder of
                the Rockies, explore the world’s best skiing and snowboarding
                destinations.
              </p>
              <p className="leading-normal">
                Whether you’re seeking a peaceful retreat or exhilarating
                slopes,{" "}
                <strong className="text-xl">
                  {" "}
                  we offer tailored experiences across multiple regions to suit
                  every traveler’s dream.
                </strong>
              </p>
            </div>
            <button className="cta text-lg self-center">
              Book Your Adventure Now
            </button>
          </div>
          <div className="w-full md:w-3/5 flex flex-col gap-3">
            <h3 className="serif text-xl md:text-3xl self-end me-6">
              Some of our popular destinations
            </h3>
            <div className="rounded-l-3xl md:bg-slate-500/10  p-6 overflow-x-auto flex flex-row gap-6">
              {allRegions}
            </div>
            <ArrowRightIcon className="size-12 self-end me-6" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Regions;
