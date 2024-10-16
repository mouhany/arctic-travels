function Resorts() {
  return (
    <>
      {/* <div className="absolute w-full bg-gradient-to-b from-[#eaeff2] to-[#62adcc] to-90% -mt-20 h-20 z-10"></div> */}
      <section
        id="resorts"
        className="flex flex-col lg:flex-row bg-[#62adcc] py-20"
      >
        <div className="bg-slate-50/50 rounded-3xl flex flex-col lg:flex-row w-full px-6 py-12">
          <div className="flex flex-col gap-6 md:w-2/5">
            <h3 className="title">Explore Top-Tier Ski Resorts</h3>
            <div className="flex flex-col gap-3">
              <p>
                Choose from world-class resorts renowned for their exceptional
                amenities, expansive slopes, and breathtaking views.
              </p>
              <p>
                Whether you’re a seasoned skier or a beginner, our handpicked
                resorts offer something for everyone, ensuring the{" "}
                <strong>perfect blend of adventure and relaxation.</strong>
              </p>
            </div>
            <button className="cta text-lg self-center">
              Find your resort now
            </button>
          </div>
          <div className="md:w-3/4">image</div>
        </div>
      </section>
    </>
  );
}

export default Resorts;
