import { dataRegions } from "./data/dataRegions";
import Carousel from "./common/Carousel";

const allRegions = dataRegions.map((region, index) => (
  <Carousel key={index} index={index} {...region} />
));

function Regions() {
  return (
    <>
      <div className="absolute w-full bg-gradient-to-b from-transparent to-offwhite to-90% -mt-20 h-20 z-10"></div>
      <section
        className="md:py-36 bg-offwhite min-h-screen md:min-h-fit flex flex-col md:flex-row items-center"
        id="regions"
      >
        <div className="max-w-screen-2xl mx-auto w-full flex flex-col gap-12 md:flex-row md:items-center h-full">
          <div className="md:w-2/5 2xl:rounded-l-3xl rounded-r-3xl md:bg-neutral-200">
            <div className="px-6 py-12 flex flex-col gap-6">
              <h3 className="title">
                Discover Your Perfect Winter Destination
              </h3>
              <div className="flex flex-col gap-3">
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
                    we offer tailored experiences across multiple regions to
                    suit every traveler’s dream.
                  </strong>
                </p>
              </div>
              <button className="cta text-lg self-center">
                Book Your Adventure Now
              </button>
            </div>
          </div>

          <div className="md:w-3/5 2xl:rounded-r-3xl md:rounded-l-3xl md:rounded-r-none md:bg-neutral-200 overflow-hidden">
            <div className="relative">
              <div className="md:block absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-offwhite md:from-neutral-200 to-transparent"></div>
              <ul className="flex flex-row gap-6 overflow-x-auto p-6 md:px-9">
                {allRegions}
              </ul>
              <div className="md:block absolute top-0 right-0 w-12 h-full bg-gradient-to-r from-transparent to-offwhite md:to-neutral-200"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Regions;
