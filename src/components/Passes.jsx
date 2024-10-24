import passesImage from "../assets/michael-shannon-EjTQKin2Z2s-unsplash.jpg";
import Description from "./common/Description";
import { passesText } from "./data/passesText";
import Hoverable from "./common/Hoverable";
import { passesData } from "./data/passesData";
import { useState } from "react";

function Passes() {
  const [hovered, setHovered] = useState(null);

  const descPasses = <Description {...passesText} />;

  const allPasses = passesData.map((pass, index) => (
    <Hoverable
      key={index}
      index={index}
      hovered={hovered}
      setHovered={setHovered}
      {...pass}
    />
  ));

  return (
    <>
      <div className="absolute w-full bg-gradient-to-b from-transparent via-[#d7dbdf] to-transparent h-40 z-10 -mt-20"></div>
      <section
        id="passes"
        className="-mb-6 py-12 min-h-screen bg-cover bg-center w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${passesImage})` }}
      >
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row-reverse w-full items-center justify-center min-h-screen">
          <div className="w-full md:max-w-prose lg:w-2/5 flex flex-col justify-center items-center">
            {descPasses}
          </div>

          <ul className="p-6 w-full lg:w-3/5 flex flex-row flex-wrap gap-6 items-center justify-center overflow-x-auto lg:rounded-3xl bg-gradient-to-b from-transparent to-slate-50/50">
            {allPasses}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Passes;
