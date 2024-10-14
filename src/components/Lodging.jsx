import lodgingImage from "../assets/edoardo-busti-s0rShYnmtEI-unsplash.jpg";

function Lodging() {
  return (
    <>
      <div className="absolute w-full bg-gradient-to-b from-offwhite via-[#eaeff2] to-transparent h-40 z-10"></div>
      <section
        id="lodging"
        className="relative flex flex-col items-start justify-evenly gap-12 min-h-screen bg-contain bg-no-repeat bg-left z-0 bg-[#eaeff2]"
        style={{ backgroundImage: `url(${lodgingImage})` }}
      >
        <div className="">
          <h3 className="title">Find Your Ideal Winter Retreat</h3>
          <div>
            <p>
              Enjoy premium accommodations that combine comfort and style. From
              cozy alpine cabins to luxurious five-star resorts,{" "}
              <strong>
                We ensure your stay is as memorable as your time on the slopes.
              </strong>{" "}
            </p>
            <p>
              Select from a wide variety of lodgings that suit your preferences
              and budget.
            </p>
          </div>
          <button className="cta text-lg self-center">
            Secure your stay now
          </button>
        </div>
      </section>
    </>
  );
}

export default Lodging;
